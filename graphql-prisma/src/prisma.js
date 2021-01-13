import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466",
  secret: "thisismysupersecrettext",
  fragmentReplacements,
});

export default prisma;

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.exists
//   .Comment({
//     id: "ckj9s0sff00hd097828464mk7",
//   })
//   .then((exists) => {
//     console.log(exists);
//   });

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });

//   if (!userExists) {
//     throw new Error("User not found");
//   }

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     "{ author { id name email posts { id title published } } }"
//   );

//   return post.author;
// };

// createPostForUser("ckj9rxqw300fb0978w9bxbgrq", {
//   title: "Shonit's Third post",
//   body: "Shonit's Third post body",
//   published: true,
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) {
//     throw new Error("Post not found");
//   }

//   const updatedPost = await prisma.mutation.updatePost(
//     {
//       data: {
//         ...data,
//       },
//       where: {
//         id: postId,
//       },
//     },
//     "{ author { id name email posts { id title published } } }"
//   );

//   return updatedPost.author;
// };

// updatePostForUser("ckj9rt4r600c80978tnbqnzbq", {
//   title: "This is the first ever post created and updated again",
//   body: "It's fun",
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// prisma.query.users(null, "{ id name posts { id title } }").then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, "{ id text author { id name } }").then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "My new graphql post is live two",
//         body: "You can find this post in request two",
//         published: true,
//         author: {
//           connect: {
//             id: "ckj9rr2ce00ar0978kt2si19u",
//           },
//         },
//       },
//     },
//     "{ id title body published }"
//   )
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//     return prisma.query.users(null, "{ id name posts { id title } }");
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

// prisma.mutation
//   .updatePost(
//     {
//       data: {
//         body: "My second graphql post is live",
//         published: true,
//       },
//       where: {
//         id: "ckj9vvdbk00m20978gu4oapvo",
//       },
//     },
//     "{ id title body published }"
//   )
//   .then((data) => {
//     return prisma.query.posts(null, "{ id title body published }");
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });
