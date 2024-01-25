import React from 'react';
import { useRouter } from 'next/router';
import { ProfileModule } from 'src/modules';
import Head from 'next/head';
import { initializeApollo } from 'src/services/graphql';
import withAuth from 'src/hoc/withAuth';
import { USER_PUBLIC_PROFILE } from 'src/graphql/user';
import UsernotFound from 'src/modules/profile/components/UsernotFound';

function Profile({ data }: any) {
    const router = useRouter();
    const username: string | undefined | string[] = router.query.username;
    let withoutSpec = username?.includes('@') ? username?.split('@')[1] : username;

    return (
        <>
            <Head>
                {' '}
                {/* <title>MintStargram.tech - Revolutionizing Social Media with NFTs</title>
                <meta name="description" content="MintStargram.tech, uniting social media & NFTs. Engage, create & monetize digital content revolutionarily Join the evolution of online interaction & ownership" />
                <meta name="keywords" content="MintStargram, NFT marketplace, NFT platform" />
                <meta property="og:image" content={linkPreview} />
                <meta property="og:image:secure_url" content={linkPreview} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta charSet="UTF-8" />
                */}
            </Head>
            {data ? <ProfileModule username={withoutSpec} ssrUser={data} /> : <UsernotFound />}
        </>
    );
}

export async function getStaticProps({ params }) {
    const client = initializeApollo();
    let data = null;
    let username = params?.username?.replace('@', '');

    try {
        const response = await client.query({
            query: USER_PUBLIC_PROFILE,
            variables: { userName: username }
        });
        data = response.data?.getUserPublicProfile;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return {
            notFound: true
        };
    }

    return {
        props: {
            data
        }
        // revalidate: 60 // Regenerate the page after 60 seconds
    };
}

export async function getStaticPaths() {
    // Fetch a list of possible usernames or leave it empty for dynamic paths
    const paths: never[] = []; // Replace with actual username paths if available

    return {
        paths,
        fallback: 'blocking' // Can also be true or false
    };
}

export default withAuth(Profile);
