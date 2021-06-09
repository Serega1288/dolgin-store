//import fetch from 'cross-fetch';
import fetch from 'isomorphic-fetch';
//import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';


export const client = new ApolloClient({
    uri: 'https://base.dolgih.store/graphql',
    fetch
})

// const url = new HttpLink({
//     uri: 'http://dev.dolgih.store/graphql',
//     fetch
// })
// console.log('url', url);
// const client = new ApolloClient({
//     link: url,
//     cache: new InMemoryCache(),
// });
//
// export default client;

