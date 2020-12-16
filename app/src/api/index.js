import gql from "graphql-tag";

const GET_JOBS = gql`
  query {
    jobs {
      id
      description
      createdAt
      applyUrl
      title
      cities {
        id
        name
        country {
          name
        }
      }
      company {
        name
      }
    }
  }
`;

export default GET_JOBS;
