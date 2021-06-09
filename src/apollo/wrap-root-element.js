// import ApolloClient from 'apollo-boost';
//
// export const client = new ApolloClient({
//     uri: `http://dev.dolgih.store/graphql`,
// })


import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
);