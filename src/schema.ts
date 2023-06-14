export const typeDefs = `#graphql
  type Query{
    # comments(limit: Int = 20, offset: Int = 0): CommentFeed
    comments: [Comment]
  }


  type CommentFeed {
    limit: Int!
    offset: Int!
    comments: [Comment]!
  }

  type Post {
    id: ID!
  }

  type Comment{
    id: ID!
    name: String
    email: String    
    body: String
  }
`;