import React from 'react'
import App from './App'
import { InMemoryCache, ApolloClient, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
///link/context

const httpLink = createHttpLink({
    uri: "https://secure-savannah-21836.herokuapp.com/"
  });

  const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // link: httpLink,
    cache: new InMemoryCache()
  });
  

export default (
        <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
