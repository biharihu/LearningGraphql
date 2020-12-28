const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(args.query.toLocaleLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      const isTitleMatch = post.title
        .toLocaleLowerCase()
        .includes(args.query.toLocaleLowerCase());
      const isBodyMatch = post.body
        .toLocaleLowerCase()
        .includes(args.query.toLocaleLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },
  coments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }
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
};

export default Query;
