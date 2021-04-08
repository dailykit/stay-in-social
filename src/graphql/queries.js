import { gql } from "@apollo/client";

export const Experience = gql`
  query MyQuery {
    experiences_experienceClassType {
      title
    }
  }
`;
