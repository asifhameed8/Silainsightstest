import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

const withAuth = (WrappedComponent: any) => {
    const RequireAuth = (props: AppProps) => {
        const router = useRouter();

        useEffect(() => {
            const user = typeof window !== 'undefined' ? window.localStorage.getItem('user') : null; // Retrieve the user data from localStorage (replace with your preferred method)

            if (!user) {
                router.push({
                    pathname: '/',
                    query: { from: router.pathname }
                });
            }
        }, [/* user, */ router]);

        return <WrappedComponent {...props} />;
    };

    // Copy over all static methods and properties from the original component
    Object.assign(RequireAuth, WrappedComponent);

    // Set a nice display name for the new component
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    RequireAuth.displayName = `withAuth(${displayName})`;

    return RequireAuth;
};

export default withAuth;
