import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { tranxNovaGetDefaultLang } from '@utils/language';
// import Cookies from 'js-cookie';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}`
});

const authLink = setContext((_, { headers }) => {
    if (typeof window === 'undefined') {
        return {
            headers: {
                ...headers
            }
        };
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
            'Accept-Language': tranxNovaGetDefaultLang()
        }
    };
});

const errorLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        if (response.errors) {
            // response.errors.forEach((error) => {
            // Handle or log the error here
            // Access operation details
            // const { operationName, variables } = operation;
            // Handle or log the error with additional information
            // console.error('GraphQL Error in', operationName);
            // console.error('Variables:', variables);
            // console.error('Error:', error.message);
            // });
        }
        return response;
    });
});

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache({
        addTypename: true
        /* typePolicies: {
            feeds: {
                keyFields: ['_id']
            }
        } */
    }),
    connectToDevTools: true,
    defaultOptions: {
        watchQuery: {
            nextFetchPolicy: 'cache-first'
        }
    }
});

export const initializeApollo = () => {
    try {
        // For SSG and SSR always create a new Apollo Client
        if (typeof window === 'undefined') {
            return createApolloClient;
        }

        // Create the Apollo Client once in the client
        if (!apolloClient) {
            apolloClient = createApolloClient;
        }

        return apolloClient;
    } catch (error) {
        console.log(error);
    }
};
