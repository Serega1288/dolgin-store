// import React from 'react';
// import { ApolloProvider } from 'react-apollo';
// //import { client } from './src/context/ApolloContext';
//
//
// import ApolloClient from 'apollo-boost';
//
// export const client = new ApolloClient({
//     uri: `http://dev.dolgih.store/graphql`,
// })
//
//
// export const wrapRootElement = ({ element }) => (
//     <ApolloProvider client={client}>{element}</ApolloProvider>
// );

export  { wrapRootElement } from './src/apollo/wrap-root-element';