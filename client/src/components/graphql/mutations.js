// import { gql } from '@apollo/client';

// export const LOGIN_MUTATION = gql`
//   mutation Login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         username
//         password
        
//       }
//     }
//   }
// `;



// export const NEW_USER_MUTATION = gql `
// mutation ($firstName: String!, 
// $lastName: String!, 
// $username: String!, 
// $email: String!,
//  $password: String!) 
//  {
//   addUser(
//     firstName: $firstName, 
//     lastName: $lastName, 
//     username: $username, 
//     email: $email, 
//     password: $password) 
//     {
//     token
//     user {
//       id
//     }
//   }
// }`

import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
    }
  }
}
`;



export const NEW_USER_MUTATION = gql `
mutation ($firstName: String!, 
$lastName: String!, 
$username: String!, 
$email: String!,
 $password: String!) 
 {
  addUser(
    firstName: $firstName, 
    lastName: $lastName, 
    username: $username, 
    email: $email, 
    password: $password) 
    {
    token
    user {
      id
    }
  }
}`
