"use client";

import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

const link = new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider >
    );
}