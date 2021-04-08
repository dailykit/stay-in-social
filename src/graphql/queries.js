import { gql } from "@apollo/client";

export const Experience = gql`
  query MyQuery {
    customers {
      email
    }
  }
`;
