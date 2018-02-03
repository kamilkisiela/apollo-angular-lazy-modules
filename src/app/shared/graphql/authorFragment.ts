import gql from 'graphql-tag';

export default gql`
  fragment authorFragment on Author {
    id
    firstName
    lastName
  }
`;
