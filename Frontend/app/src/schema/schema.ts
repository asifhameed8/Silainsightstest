import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Minimum eight characters, at least one letter, one number and one special character'
        )
});

export const AffiliateUserSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .matches(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Must be valid email'
        ),
    code: yup.string().required('Code is required').matches(/.{5,}/, 'Code must be at least 5 characters')
});

export const SignUpSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First Name is required')
        .matches(/^[A-Za-z\s\-]+$/, 'First Name include only alphabetic characters')
        .min(3, 'Must be more than 3 characters')
        .max(10, 'Must be less than 10'),
    lastName: yup
        .string()
        .required('Last Name is required')
        .matches(/^[A-Za-z\s\-]+$/, 'Last Name include only alphabetic characters')
        .min(3, 'Must be more than 3 characters')
        .max(10, 'Must be less than 10'),
    userName: yup
        .string()
        .required('User Name is required')
        .min(3, 'Must be more than 3 characters')
        .max(14, 'Must not be more than 14 characters')
        .matches(/^[-a-zA-Z0-9_.]*[a-z][-a-zA-Z0-9_.]*$/, `Invalid username. Please use alphanumeric characters with optional (-) and (_)`),
    email: yup
        .string()
        .required('Email is required')
        .matches(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Must be valid email'
        ),
    password: yup
        .string()
        .required('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[0-9])(?=.)(?=.{8,})/, 'Add valid password'),
    terms: yup.boolean().required('Please Agree to terms')
});

export const ResetPasswordSchema = yup.object().shape({
    newPassword: yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Minimum eight characters, at least one letter, one number and one special character'
        ),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
});

export const ForgotSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email').required('Email is required')
});

export const CodeSchema = yup.object().shape({
    code: yup
        .string()
        .optional()
        .test('len', 'Must be exactly 5 digits', function (val) {
            // Validation will only apply if val is not undefined, null, or an empty string
            return !val || val.toString().length === 5;
        })
});
export const EditProfileSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First Name is required')
        .matches(/^[A-Za-z\s\-]+$/, 'Name include only alphabetic characters')
        .min(3, 'Must be more than 2 characters')
        .max(10, 'Must not be more than 10 characters'),

    lastName: yup
        .string()
        .required('Last Name is required')
        .matches(/^[A-Za-z\s\-]+$/, 'Name include only alphabetic characters')
        .min(3, 'Must be more than 2 characters')
        .max(10, 'Must not be more than 10 characters'),

    userName: yup
        .string()
        .required('username is required')
        .matches(/^[-a-zA-Z0-9_.]*[a-z][-a-zA-Z0-9_.]*$/, 'Username include only letters (A-Z), numbers (0-9), hyphens (-), and underscores (_).')
        .min(3, 'Must be more than 2 characters')
        .max(14, 'Must not be more than 14 characters'),
    facebook: yup
        .string()
        // .test('is-facebook-url', 'Must be facebook url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /^https?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_\-\.]+)\/?$/.test(value);
        // })
        .nullable(),

    instagram: yup
        .string()
        // .test('is-instagram-url', 'Must be instagram url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /(?:http(?:s)?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_]+/.test(value);
        // })
        .nullable(),
    twitter: yup
        .string()
        // .test('is-twitter-url', 'Must be twitter url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /^https?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/?$/.test(value);
        // })
        .nullable(),
    discord: yup
        .string()
        // .test('is-discord-url', 'Must be discord url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /^(https?:\/\/)?(www\.)?(discord\.gg\/|discordapp\.com\/invite\/)?([a-zA-Z0-9-]+)$/.test(value);
        // })
        .nullable(),
    youtube: yup
        .string()
        // .test('is-youtube-url', 'Must be youtube url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /^https?:\/\/(?:www\.)?youtube\.com\/(?:c\/|channel\/)([a-zA-Z0-9_-]{24})/.test(value);
        // })
        .nullable(),
    tiktok: yup
        .string()
        // .test('is-tiktok-url', 'Must be tiktok url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     return /^https?:\/\/(?:www\.)?tiktok\.com\/@([a-zA-Z0-9_.-]+)\/?$/.test(value);
        // })
        .nullable(),
    web: yup
        .string()
        // .test('is-web-url', 'Must be web url', function (value) {
        //     if (!value) {
        //         return true;
        //     }
        //     // Validate against the Facebook URL pattern
        //     return /^https?:\/\/(?:www\.)?[\w.-]+\.[a-z]{2,}(?:\/\S*)?$/i.test(value);
        // })
        .nullable()
});

export const UpdatePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required('Current password is required'),
    password: yup
        .string()
        .required('New password is required')
        .matches(/.{8,}/, 'New password must be at least 8 characters long')
        .matches(/(?=.*\d)/, 'New password must contain a number')
        .matches(/(?=.*[A-Z])/, 'New password must contain at least one capital letter'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
});

export const PollSchema = yup.object().shape({
    question: yup.string().required('Question is required'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required'),
    options: yup
        .array()
        .of(
            yup.object().shape({
                text: yup.string().required('Choice is required')
            })
        )
        .min(2, 'At least two choices are required')
        .max(4, 'No more than four choices are allowed')
});

export const TokenSchema = yup.object().shape({
    tokenId: yup.string(),
    image: yup.string(),
    contract: yup.string(),
    chain: yup.string()
});

export const PostSchema = yup
    .object()
    .shape({
        // text: yup.string().required('Text is required'),
        // text: yup.string().trim().required('Atleast one character should be typed to create a post'),
        media: yup.array().of(yup.string().url('Valid URL is required')),
        postType: yup.mixed().oneOf(['POLL', 'SCHEDULE'], 'Invalid post type'),
        poll: yup.lazy((value) => (value ? PollSchema.required('Poll data is required when post type is POLL') : yup.mixed().notRequired())),
        scheduledAt: yup.lazy((value, schemaContext) =>
            schemaContext.parent.postType === 'SCHEDULE'
                ? yup.string().required('ScheduledAt is required when post type is SCHEDULE')
                : yup.mixed().notRequired()
        ),
        twitter: yup.boolean(),
        linkedin: yup.boolean(),
        inReplyToPost: yup.string(),
        token: yup.lazy((value) => (value ? TokenSchema.required('Token data is required when post type is NFT') : yup.mixed().notRequired()))
    })
    .test('poll-media-exclusive', 'Only one of poll or media is allowed, but neither is required', (value) => {
        const hasPoll = !!value.poll;
        const hasMedia = value.media && value.media.length > 0;

        if (hasPoll && hasMedia) {
            // Both are provided, which is not allowed
            return false;
        } else {
            // Either one or none is provided, which is allowed
            return true;
        }
    });

export const CollectionSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    symbol: yup.string().required('lastName is required'),
    royalty: yup
        .number()
        .typeError('Royalty must be a number')
        .min(0, 'Minimum royalty is 0%')
        .max(10, 'Maximum royalty is 10%')
        .required('Royalty are required'),
    listingPrice: yup.number().typeError('Listing price must be a number'),
    auctionDuration: yup.number(),
    supply: yup.string().required('Supply is required'),
    autoAuction: yup.boolean()
});

export const UpdateCollectionSchema = yup.object().shape({
    name: yup.string(),
    // royalty: yup.number().typeError('Royalty must be a number').min(0, 'Minimum royalty is 0%').max(10, 'Maximum royalty is 10%').optional(),
    royalty: yup.string(),
    listingPrice: yup.number().typeError('Listing price must be a number'),
    auctionDuration: yup.number(),
    supply: yup.string(),
    autoAuction: yup.boolean(),
    listing_type: yup.string().optional()
});

export const ProfileSchema = yup.object().shape({});

export const StakingCollectionSchema = yup.object().shape({
    // name: yup.string().required('Name is required'),
    // chain: yup.string().required('Chain is required'),
    category: yup.string().required('Category name is required'),
    metaverse: yup.string().required('Metaverse name is required'),
    chainId: yup.number().required('Chain ID is required'),
    tokenId: yup.number().required('Token ID is required'),
    // supply: yup.number().required('Supply is required'),
    collectionAddress: yup
        .string()
        .required('Collection Address is required')
        .matches(/^(0x)?[0-9a-fA-F]{40}$/, 'Invalid Collection Address'),
    collectionName: yup.string().required('Collection Name is required'),
    tokenAddress: yup
        .string()
        .required('Token Address is required')
        .matches(/^(0x)?[0-9a-fA-F]{40}$/, 'Invalid Token Address'),
    tokenName: yup.string().required('Token Name is required'),
    stakingAddress: yup
        .string()
        .required('Staking Address is required')
        .matches(/^(0x)?[0-9a-fA-F]{40}$/, 'Invalid Staking Address'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required')

    // stakingName: yup.string().required('Staking Name is required')
    // logoUrl: yup.string().url('Invalid Logo URL'),
    // bannerUrl: yup.string().url('Invalid Banner URL'),
    // status: yup.string().required('Status is required'),
    // description: yup.string()
});

export const CategorySchema = yup.object().shape({
    name: yup.string().required('Name is required')
});

export const SeaportListingSchema = yup.object().shape({
    endTime: yup.string(),
    marketplaces: yup.array().of(
        yup
            .object()
            .shape({
                price: yup.number().required('Price is required')
            })
            .required()
    )
});
