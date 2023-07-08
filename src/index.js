import React, { StrictMode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
//root.render(<App />);
const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});
// client
//   .query({
//     query: gql`
// query GetLocations{
//   locations{
//     id
//     name
//     description
//     photo
//   }
// }
// `,
//   })
//   .then((result) => console.log(result));
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
