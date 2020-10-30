const knex = require("knex");
const config = require("./knexfile");
const env = process.env.NODE_ENV || "development";
const connection = knex(config[env]);

function getAllPosts(db = connection) {
  return db("posts")
      .select()
}


function getAllTags(db = connection) {
  return (
    db("tags")
      .select()
  );
}


function getPost(id, db = connection) {
  return (
    db("posts")
      .where("posts.id", id)
      .select()
      .first()
  );
}

// function addPost(data, db = connection) {
//   return (
//     db("posts")
//       .select()
//   );
// }

// function editPost(data, db = connection) {
//   return (
//     db("posts")
//       .select()
//   );
// }


module.exports = {
  getAllPosts,
  getAllTags,
  getPost
  // getPostById,
  // getTagsByPostId,
  // addPost,
  // editPost
};
