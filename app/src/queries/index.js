import gql from "graphql-tag";

const GET_JOBS = gql`
  query {
    jobs {
      id
      description
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
        logoUrl
      }
    }
  }
`;

export default GET_JOBS;
