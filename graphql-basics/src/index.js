import { GraphQLServer } from "graphql-yoga";

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [
  {
    id: "1",
    name: "Akash",
    email: "akash@kurage.in",
    age: 21,
  },
  {
    id: "2",
    name: "Shonit",
    email: "shonit@kurage.in",
  },
  {
    id: "3",
    name: "Rajesh",
    email: "rajesh@kurage.in",
  },
];
const postsData = [
  {
    id: "1",
    title: "Akash",
    body: "akash@kurage.in",
    published: true,
  },
  {
    id: "2",
    title: "Shonit",
    body: "shonit@kurage.in",
    published: true,
  },
  {
    id: "3",
    title: "Rajesh",
    body: "kumar@kurage.in",
    published: false,
  },
];

// Type definitions (schema)
const typeDefs = `
    type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      me: User!
      post: Post!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return [...users];
      }

      return users.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return [...postsData];
      }

      return postsData.filter((post) => {
        const isTitleMatch = post.title
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
        const isBodyMatch = post.body
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());

        return isTitleMatch || isBodyMatch;
      });
    },
    me() {
      return {
        id: "123098",
        name: "Akash",
        email: "akash@kurage.in",
        age: 21,
      };
    },
    post() {
      return {
        id: "123",
        title: "Don't Know",
        body: "lol",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up!");
});
