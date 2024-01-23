import { Injectable } from '@nestjs/common';
import {
    LoginGoogleInput,
    LoginGoogleOutput,
    LoginResult,
    LoginUserInput,
    SignOutResult,
    VerifyEmailOutput,
    bannedUsernames
} from 'src/modules/users/dto/users.input';
import { UserDocument, User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwt.constant';
import { InjectModel } from '@nestjs/mongoose';
import {
    Verification,
    VerificationDocument
} from '../verification/entities/verification.entity';
import { Model, Types } from 'mongoose';
import { emailRegex, verificationTypes } from 'src/constants/auth';
import { VerificationService } from '../verification/verification.service';
import { EmailService } from '../shared/services/email.service';
import { OAuth2Client } from 'google-auth-library';
import { CommonServices } from '../shared/services/common.service';
import { generateRandomNumber } from 'src/helpers/common.helpers';
import * as bcrypt from 'bcryptjs';
import { ERole } from 'src/constants/roles';

import { translate } from 'src/common/translations';

@Injectable()
export class AuthService extends CommonServices {
    constructor(
        @InjectModel(Verification.name)
        private verificationModel: Model<VerificationDocument>,
        private userService: UsersService,
        private jwtService: JwtService,
        private verificationService: VerificationService,
        private emailService: EmailService
    ) {
        super();
    }

    async validateToken(token: string) {
        try {
            const decoded = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.secret
            });
            return decoded;
        } catch (error) {
            // If the token is invalid or expired, return null.
            return null;
        }
    }

    async validateUser(identifier: string): Promise<User> {
        const user = await this.userService.userModel.findOne({
            wallet: identifier
        });
        if (user) {
            return user;
        }
        return null;
    }

    // async login(user: UserDocument) {
    //     // const referral = await this.referralService.referralModel.findOne({
    //     //     user: user?._id
    //     // });
    //     // let ref = false;
    //     // if (referral) {
    //     //     ref = true;
    //     // }
    //     const payload = {
    //         email: user.email,
    //         _id: user._id
    //     };

    //     if (user?.settings?.twoFa) {
    //         await this.userService.send2FaVerificationCode(
    //             user?._id,
    //             user?.email,
    //             user?.firstName
    //         );
    //         return {
    //             access_token: this.jwtService.sign(
    //                 {
    //                     userId: user._id,
    //                     twoFa: user?.settings?.twoFa,
    //                     temp: true
    //                 },
    //                 {
    //                     // secret: env.JWT_SECRET_2FA,
    //                     expiresIn: 60 * 15
    //                 }
    //             ),
    //             user: null,
    //             twoFa: user?.settings?.twoFa
    //         };
    //     } else {
    //         return {
    //             access_token: this.jwtService.sign(payload, {
    //                 expiresIn: '30d'
    //             }),
    //             user: payload,
    //             twoFa: user?.settings?.twoFa
    //         };
    //     }
    // }

    async verifyEmail(_id: Types.ObjectId): Promise<VerifyEmailOutput> {
        const user = await this.userService.userModel.findOne({
            _id
        });
        if (!user) {
            throw new Error(translate('auth.no_email_found'));
        }
        if (user?.isEmailVerified) {
            throw new Error(translate('auth.email_verified'));
        }
        user.isEmailVerified = true;
        await user.save();

        const result: LoginResult = await this.createJwt(user);

        return {
            message: translate('auth.successfully_verified'),
            success: true,
            loginResult: result
        };
    }

    async checkSignUpValidation(body: { email: string; userName: string }) {
        const errors = [];
        //email
        const [checkUser, checkUser2] = await Promise.all([
            this.userService.findOne({
                email: body.email
            }),
            this.userService.findOne({
                userName: body.userName
            })
        ]);
        if (
            checkUser &&
            checkUser.email &&
            checkUser2 &&
            checkUser2.userName == body.userName
        ) {
            errors.push({
                message: `${checkUser.email} and ${checkUser2.userName} already registered`
            });
        } else if (
            checkUser &&
            checkUser.email
            // &&
            // checkUser.role &&
            // checkUser.role == ERole.USER
        ) {
            errors.push({ message: `${checkUser.email} already registered` });
        } else if (checkUser2 && checkUser2.userName == body.userName)
            errors.push({
                message: `${checkUser2.userName} already registered`
            });
        else {
            const re = emailRegex;
            if (!re.test(String(body.email).toLowerCase())) {
                errors.push({ email: this.messages.invalidEmailFormat });
            }
        }

        return [body, errors];
    }

    async validateUserByPassword(
        loginAttempt: LoginUserInput
    ): Promise<LoginResult | undefined> {
        // password protection
        /* Test Zack */

        //console.log('zackService.getStoreToken()', zackService.getStoreToken());

        // This will be used for the initial login
        let userToAttempt: UserDocument | undefined;
        if (loginAttempt.email) {
            userToAttempt = await this.userService.userModel
                .findOne({
                    $or: [
                        { email: loginAttempt.email },
                        {
                            userName: {
                                $regex: `^${loginAttempt.email}$`,
                                $options: 'i'
                            }
                        }
                    ]
                })
                .exec();
        }
        // If the user is not enabled, disable log in - the token wouldn't work anyways
        if (userToAttempt && userToAttempt.isActive === false)
            userToAttempt = undefined;

        if (!userToAttempt) return undefined;

        if (userToAttempt.isBlocked) {
            throw new Error(translate('auth.blocked'));
        }

        if (userToAttempt.isBanned) {
            throw new Error(translate('auth.banned'));
        }

        if (userToAttempt.lockedAt) {
            const currentTime = new Date();
            const lockedAtTime = new Date(userToAttempt.lockedAt);
            if (currentTime < lockedAtTime) {
                throw new Error(translate('auth.account_locked_1hour'));
            } else {
                userToAttempt =
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        { login_attempts: 0, lockedAt: null },
                        { new: true }
                    );
            }
        }

        // if(!userToAttempt.isEmailVerified) throw new Error('You must varify your email address')
        // will do later when email verify api will work properly
        // Check the supplied password against the hash stored for this email address
        let isMatch = false;
        try {
            isMatch = await userToAttempt.checkPassword(loginAttempt.password);
        } catch (error) {
            return undefined;
        }

        if (isMatch) {
            if (userToAttempt.login_attempts !== 0) {
                await this.userService.userModel.findOneAndUpdate(
                    { _id: userToAttempt._id },
                    { login_attempts: 0, lockedAt: null }
                );
            }

            if (userToAttempt.settings.twoFa) {
                await this.userService.send2FaVerificationCode(
                    userToAttempt?._id,
                    userToAttempt?.email,
                    userToAttempt?.firstName
                );

                const jwt = await this.jwtService.signAsync(
                    {
                        _id: userToAttempt._id,
                        email: userToAttempt.email,
                        twoFa: userToAttempt?.settings?.twoFa,
                        key: userToAttempt?.key,
                        temp: true
                    },
                    {
                        secret: jwtConstants.secret,
                        expiresIn: 60 * 15
                    }
                );
                return {
                    access_token: jwt,
                    user: null,
                    twoFa: userToAttempt?.settings?.twoFa
                };
            } else {
                // If there is a successful match, generate a JWT for the user
                const result: LoginResult = await this.createJwt(userToAttempt);
                // userToAttempt.timestamp = new Date();
                // userToAttempt.save();
                // password protectio
                if (!result.user?.invitation_code) {
                    return {
                        notAffiliated: true,
                        user: null,
                        access_token: result.access_token
                    };
                }
                if (!result.user?.isEmailVerified) {
                    await this.emailService.sendVerifyEmail(
                        result.user.email,
                        result.user._id,
                        result.access_token
                    );
                    throw new Error(translate('auth.verification_email_sent'));
                }

                return { ...result, notAffiliated: false };
            }
        } else {
            if (userToAttempt) {
                if (userToAttempt.login_attempts < 4) {
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        {
                            $set: {
                                login_attempts: Number(
                                    userToAttempt.login_attempts + 1
                                )
                            }
                        }
                    );
                } else {
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        {
                            $set: {
                                lockedAt: new Date().setHours(
                                    new Date().getHours() + 1
                                )
                            }
                        }
                    );
                    throw new Error(translate('auth.account_locked'));
                }
            }
        }

        return undefined;
    }

    async createJwt(u: User): Promise<{ user: User; access_token: string }> {
        const user = {
            email: u.email,
            _id: u._id,
            twoFa: u?.settings?.twoFa,
            key: u.key
        };

        const jwt = await this.jwtService.signAsync(user, {
            secret: jwtConstants.secret,
            expiresIn: jwtConstants.expire
        });

        const payload = {
            _id: u._id,
            firstName: u.firstName,
            lastName: u.lastName,
            userName: u.userName,
            email: u.email,
            hideWallet: u.hideWallet,
            phoneNumber: u.phoneNumber,
            wallet: u.wallet,
            roles: u.roles,
            isActive: u.isActive,
            avatar: u.avatar,
            coverImage: u.coverImage,
            isEmailVerified: u.isEmailVerified,
            facebook: u.facebook,
            instagram: u.instagram,
            reddit: u.reddit,
            twitter: u.twitter,
            discord: u.discord,
            youtube: u.youtube,
            tiktok: u.tiktok,
            web: u.web,
            bio: u.bio,
            followersCount: u.followersCount,
            followers: u.followers,
            following: u.following,
            followingCount: u.followingCount,
            isVerified: u.isVerified,
            isBlocked: u.isBlocked,
            isBanned: u.isBanned,
            settings: u.settings,
            isSCC: u.isSCC,
            verifyStatus: u.verifyStatus,
            key: u.key,
            referral: u.referral,
            source: u.source,
            country: u.country,
            twitterId: u.twitterId,
            isLinkedInConnected: u.linkedAccessToken
                ? true
                : false /* u.isLinkedInConnected */,
            backgroundTheme: u.backgroundTheme,
            blockedUsers: u.blockedUsers,
            affiliatedUser: u.affiliatedUser,
            points: u.points,
            scc_status: u.scc_status,
            invitation_code: u.invitation_code,
            onesignal_keys: u.onesignal_keys,
            userNameUpdateAt: u.userNameUpdateAt
        };

        return {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            user: payload,
            access_token: jwt
        };
    }

    async createUser(body): Promise<SignOutResult | undefined> {
        try {
            const isAlreadyUser = await this.userService.findOne({
                $or: [
                    { email: body.email },
                    { userName: body.email.toLowerCase() }
                ]
            });

            if (isAlreadyUser) {
                return { message: translate('auth.already_registered') };
            }

            // ------- REFRRAL -------

            let referral = null;
            if (body?.referral) {
                referral = await this.userService.findOne({
                    userName: body.referral
                });

                // referral = await this.userService.findOne({
                //     invitation_code: body.referral
                // });
            }

            const createUser = await this.userService.create({
                ...body,
                ...(referral && { referral: referral?._id })
            });

            const loggedIn = await this.createJwt(createUser);

            return {
                access_token: loggedIn.access_token
            };
        } catch (error) {
            return error;
        }
    }

    async sendPasswordResetEmail(email: string) {
        const user = await this.userService.findOne({ email });

        if (!user) {
            throw new Error(translate('auth.no_email_found'));
        }
        const { _id } = user;
        const verification = await this.verificationModel.findOne({
            userId: _id,
            type: verificationTypes.FORGOT_PASSWORD
        });

        if (verification) {
            const hours =
                Math.abs(
                    new Date().getTime() -
                        new Date(verification.updatedAt).getTime()
                ) / 36e5;
            if (verification.attempts > 2 && hours < 24) {
                throw new Error(translate('auth.code_3attemptes'));
            }

            if (hours < 1) {
                throw new Error(translate('auth.email_retry_1hour'));
            }
        }

        const code = generateRandomNumber();
        this.verificationService.createCode(
            code,
            _id,
            verificationTypes.FORGOT_PASSWORD
        );
        return await this.emailService.sendForgotPasswordEmail(
            email,
            code,
            user.firstName
        );
    }

    async verifyCode(body: { email: string; code: string }) {
        const { email, code } = body;

        const user = await this.userService.findOne({ email: email });

        if (!user) {
            throw new Error(translate('auth.no_email_found'));
        }

        const verification = await this.verificationService.findByUserId(
            user._id
        );
        if (verification.attempts > 2) {
            throw new Error(translate('auth.code_3attemptes'));
        } else {
            if (verification.code === code) {
                await this.verificationModel.findOneAndUpdate(
                    { _id: verification._id },
                    { isVerified: true },
                    { new: true }
                );
                return { success: true };

                // const mailRes = await Mailer.sendForgotPasswordEmail(email, code);
            } else {
                verification.attempts = verification.attempts + 1;
                await verification.save();
                throw new Error(translate('auth.incorrect_pin'));
            }
        }
    }

    async resetPassword(body: {
        email: string;
        code: string;
        password: string;
        confirmPassword: string;
    }) {
        const { email, code, password, confirmPassword } = body;
        if (password !== confirmPassword) {
            throw new Error(translate('auth.confirm_password'));
        }

        const user = await this.userService.findOne({ email: email });
        if (user) {
            const verification = await this.verificationService.findByUserId(
                user._id
            );

            const isVerified = await this.verificationModel.findOne({
                _id: verification._id,
                isVerified: true,
                code
            });
            if (verification?.attempts > 2) {
                // && !verification?.isVerified
                throw new Error(translate('auth.code_3attemptes'));
            }

            if (isVerified) {
                const pwd = bcrypt.hashSync(password, jwtConstants.salt);
                const key = user._id + code + user._id;
                await this.userService.findOneAndUpdate(user._id, {
                    password: pwd,
                    key: key
                });

                return { success: true };
            } else {
                if (verification) {
                    verification.attempts = verification.attempts + 1;
                    await verification.save();
                }
                throw new Error(translate('auth.incorrect_pin'));
            }
        } else {
            throw new Error(translate('auth.no_email_found'));
        }
    }

    async resendVerificationEmail(body: { email: string }) {
        const { email } = body;
        const user = await this.userService.findOne({ email: email });

        if (!user) {
            throw new Error(translate('auth.no_email_found'));
        }
        const payload = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            wallet: user.wallet,
            active: user.isActive,
            avatar: user.avatar,
            coverImage: user.coverImage,
            isEmailVerified: user.isEmailVerified
        };

        const token = this.jwtService.sign(
            payload /* , { expiresIn: '60d' } */
        );

        const data = await this.emailService.sendVerifyEmail(
            email,
            user._id,
            token
        );
        return data;
    }

    async googleLogin(data: LoginGoogleInput): Promise<LoginGoogleOutput> {
        const { token, referral: referralId } = data;

        let referral = null;
        if (referralId) {
            referral = await this.userService.findOne({ _id: referralId });
        }

        // --------- GOOGLE LOGIN ---------

        const client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.FRONT_BASE_URL
        );

        const tokenRes = await client.getToken(token);
        const ticket = await client.verifyIdToken({
            idToken: tokenRes.tokens.id_token,
            audience: process.env.CLIENT_ID
        });
        const { name, email, picture } = ticket.getPayload();
        const firstName = name.split(' ')[0];
        const lastName = name.split(' ')[1];
        const userName =
            firstName.toLowerCase() +
            '' +
            lastName.toLocaleLowerCase() +
            `${Math.floor(1000 + Math.random() * 9000)}`;

        let user = await this.userService.findOneAndUpdate(
            { email },
            {
                firstName,
                lastName,
                email,
                avatar: picture,
                isEmailVerified: true
            }
        );
        if (!user) {
            user = await this.userService.create({
                firstName,
                lastName,
                email: email,
                avatar: picture,
                userName: userName,
                isEmailVerified: true,
                ...(referral && { referral })
            });
        }

        if (user && user.settings.twoFa) {
            await this.userService.send2FaVerificationCode(
                user?._id,
                user?.email,
                user?.firstName
            );

            const jwt = await this.jwtService.signAsync(
                {
                    _id: user._id,
                    email: user.email,
                    twoFa: user?.settings?.twoFa,
                    key: user?.key,
                    temp: true
                },
                {
                    secret: jwtConstants.secret,
                    expiresIn: 60 * 15
                }
            );
            return {
                access_token: jwt,
                user: null,
                twoFa: user?.settings?.twoFa
            };
        } else {
            const loggedUser = await this.createJwt(user);

            if (loggedUser?.user?.isBlocked === true) {
                // return {
                //     message: this.messages.userBlocked,
                //     success: false,
                //     status: HttpStatus.FORBIDDEN
                // };
                return undefined;

                // ---------------------------
            }
            // password protection

            if (!loggedUser.user?.invitation_code) {
                return {
                    notAffiliated: true,
                    user: null,
                    access_token: loggedUser.access_token
                };
            }

            return { ...loggedUser, notAffiliated: false };
        }
    }

    // ------------------- 2FA VERIFICATION ------------------------

    async send2faCode(_id: Types.ObjectId, email: string) {
        const code = generateRandomNumber();
        const user = await this.userService.findOne({ email: email });
        const objectId = new Types.ObjectId(_id);

        this.verificationService.createCode(
            code,
            objectId,
            verificationTypes.TWO_FA
        );
        await this.emailService.sendVerificationCode(
            email,
            code,
            user.firstName
        );
        return { success: true, message: this.messages.verificationEmail };
    }

    async verify2faCode(body: {
        email: string;
        code: string;
        userId: Types.ObjectId;
    }) {
        try {
            const { email, code, userId } = body;

            const response = await this.verifyCode({ email, code });
            if (response?.success) {
                const user = await this.userService.userModel.findById(userId);
                const updated =
                    await this.userService.userModel.findByIdAndUpdate(
                        user._id,
                        {
                            $set: {
                                settings: {
                                    ...user.settings,
                                    twoFa: user.settings?.twoFa ? false : true,
                                    ...(user.settings?.twoFa && {
                                        threeFa: false
                                    })
                                },
                                ...(user.settings?.twoFa && {
                                    base32_secret: ''
                                })
                            }
                        },
                        { new: true }
                    );

                const result: LoginResult = await this.createJwt(updated);

                return {
                    success: true,
                    token: result.access_token,
                    message: updated.settings.twoFa
                        ? translate('auth.fa_successfully')
                        : translate('auth.fa_successfully_remove'),
                    status: updated.settings.twoFa
                };
            }
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            throw new Error(error?.message);
        }
    }

    // ------------------- 2FA LOGIN ------------------------

    async verify2faLogin(body: {
        email: string;
        code: string;
        userId: Types.ObjectId;
    }) {
        const { email, code, userId } = body;

        const response = await this.verifyCode({ email, code });
        if (response.success) {
            const user = await this.userService.userModel.findById(userId);
            if (user.settings.threeFa) {
                return {
                    threeFa: true
                };
            } else {
                const result: LoginResult = await this.createJwt(user);
                return result;
            }
        }
    }

    async deleteUserAccount(id: Types.ObjectId) {
        const user = await this.userService.userModel.findById(id);
        const random = Math.random().toString(36).substring(2, 17);
        await this.userService.userModel.findByIdAndUpdate(id, {
            isDeleted: true,
            deletedAt: new Date(),
            isBlocked: true,
            isActive: false,
            email: user.email + '_' + random,
            userName: user.userName + '_' + random
        });
        return { success: true };
    }

    async changePassword(
        userId: Types.ObjectId,
        currentPassword: string,
        newPassword: string
    ): Promise<string> {
        const user = await this.userService.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const passwordsMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!passwordsMatch) {
            throw new Error(translate('auth.current_password_incorrect'));
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        const random = Math.random().toString(36).substring(2, 17);
        const key = user._id + random + user._id;
        const updatedUser = await this.userService.userModel
            .findByIdAndUpdate(
                { _id: userId },
                { $set: { password: hashedNewPassword, key: key } },
                { new: true }
            )
            .lean();

        const loggedIn = await this.createJwt(updatedUser);

        return loggedIn.access_token;
    }

    async isUsernameAvailable(userName: string) {
        if (bannedUsernames.includes(userName?.toLowerCase())) {
            return { success: true, message: translate('auth.available') };
        }

        const isAvailable = await this.userService.findOne({
            userName: { $regex: `^${userName}$`, $options: 'i' }
        });
        if (isAvailable) {
            return { success: true, message: translate('auth.available') };
        } else {
            return { success: false, message: translate('auth.not_available') };
        }
    }

    async isEmailAvailable(email: string) {
        const isAvailable = await this.userService.findOne({ email });
        if (isAvailable) {
            return { success: true, message: translate('auth.available') };
        } else {
            return { success: false, message: translate('auth.not_available') };
        }
    }

    // --------- ADMIN --------------

    async validateAdminByPassword(
        loginAttempt: LoginUserInput
    ): Promise<LoginResult | undefined> {
        // This will be used for the initial login
        let userToAttempt: UserDocument | undefined;
        if (loginAttempt.email) {
            userToAttempt = await this.userService.userModel
                .findOne({
                    $or: [
                        { email: loginAttempt.email },
                        { userName: loginAttempt.email.toLowerCase() }
                    ]
                })
                .exec();
        }
        if (!userToAttempt?.roles?.includes(ERole.ADMIN)) return undefined;
        // If the user is not enabled, disable log in - the token wouldn't work anyways
        if (userToAttempt && userToAttempt.isActive === false)
            userToAttempt = undefined;

        if (!userToAttempt) return undefined;

        if (userToAttempt.isBlocked) {
            throw new Error(translate('auth.blocked'));
        }

        if (userToAttempt.isBanned) {
            throw new Error(translate('auth.banned'));
        }

        if (userToAttempt.lockedAt) {
            const currentTime = new Date();
            const lockedAtTime = new Date(userToAttempt.lockedAt);
            if (currentTime < lockedAtTime) {
                throw new Error(translate('auth.account_locked_1hour'));
            } else {
                userToAttempt =
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        { login_attempts: 0, lockedAt: null },
                        { new: true }
                    );
            }
        }

        // if(!userToAttempt.isEmailVerified) throw new Error('You must varify your email address')
        // will do later when email verify api will work properly
        // Check the supplied password against the hash stored for this email address

        let isMatch = false;
        try {
            isMatch = await userToAttempt.checkPassword(loginAttempt.password);
        } catch (error) {
            return undefined;
        }

        if (isMatch) {
            if (userToAttempt.login_attempts !== 0) {
                await this.userService.userModel.findOneAndUpdate(
                    { _id: userToAttempt._id },
                    { login_attempts: 0, lockedAt: null }
                );
            }

            if (userToAttempt.settings.twoFa) {
                await this.userService.send2FaVerificationCode(
                    userToAttempt?._id,
                    userToAttempt?.email,
                    userToAttempt?.firstName
                );

                const jwt = await this.jwtService.signAsync(
                    {
                        _id: userToAttempt._id,
                        email: userToAttempt.email,
                        twoFa: userToAttempt?.settings?.twoFa,
                        temp: true
                    },
                    {
                        secret: jwtConstants.secret,
                        expiresIn: 60 * 15
                    }
                );
                return {
                    access_token: jwt,
                    user: null,
                    twoFa: userToAttempt?.settings?.twoFa
                };
            } else {
                // If there is a successful match, generate a JWT for the user
                const result: LoginResult = await this.createJwt(userToAttempt);
                // userToAttempt.timestamp = new Date();
                // userToAttempt.save();
                return result;
            }
        } else {
            if (userToAttempt) {
                if (userToAttempt.login_attempts < 4) {
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        {
                            $set: {
                                login_attempts: Number(
                                    userToAttempt.login_attempts + 1
                                )
                            }
                        }
                    );
                } else {
                    await this.userService.userModel.findOneAndUpdate(
                        { _id: userToAttempt._id },
                        {
                            $set: {
                                lockedAt: new Date().setHours(
                                    new Date().getHours() + 1
                                )
                            }
                        }
                    );
                    throw new Error(translate('auth.account_locked'));
                }
            }
        }

        return undefined;
    }

    // password protection
    async invitationCodeVerify(id, code) {
        const IsAffiliatedUser = await this.userService.findOne({
            _id: id,
            affiliatedUser: true
        });
        if (IsAffiliatedUser) {
            throw new Error(translate('auth.verification_email_already_sent'));
        }
        const referral = await this.userService.findOne({
            invitation_code: code
        });

        if (referral) {
            const unique_code = Array.from(
                { length: 5 },
                () =>
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[
                        Math.floor(Math.random() * 36)
                    ]
            ).join('');

            // password protection
            const createUser = await this.userService.findOneAndUpdate(
                { _id: id },
                {
                    referral: referral._id,
                    invitation_code: unique_code,
                    affiliatedUser: true
                }
            );
            const result: LoginResult = await this.createJwt(createUser);

            if (!result.user?.isEmailVerified) {
                await this.emailService.sendVerifyEmail(
                    result.user.email,
                    result.user._id,
                    result.access_token
                );
                throw new Error(translate('auth.verification_email_sent'));
            }

            return result;
        } else {
            throw new Error(translate('auth.unvalid'));
        }
    }

    async refetchUser(id: Types.ObjectId) {
        const refetch = await this.userService.findById(id);
        const loggedIn = await this.createJwt(refetch);
        return { user: loggedIn?.user };
    }
}
