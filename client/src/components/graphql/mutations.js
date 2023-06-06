import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;

export const NEW_USER_MUTATION = gql`
  mutation addUser( $username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      firstName
      lastName
      email
      username
      password
    }
  }
`;

