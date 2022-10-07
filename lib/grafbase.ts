import { gql, GraphQLClient } from 'graphql-request';
export { gql };

const apiUrl = process.env.GRAFBASE_API_URL;
const apiKey = process.env.GRAFBASE_API_KEY;

export const grafbase = new GraphQLClient(apiUrl, 
  { headers: { 'x-api-key': apiKey }})
