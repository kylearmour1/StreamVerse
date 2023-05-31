import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      email
    }
  }
`;

export const NEW_USER_MUTATION = gql`
  mutation addUser( $username: String!, $password: String!) {
    addUser()
  }
`
