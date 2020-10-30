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


function getPostById(id, db = connection) {
  return (
    db("posts")
      .where("posts.id", id)
      .select()
      .first()
  );
}

function addPost(data, db = connection) {
  return (
    db("posts")
      .select()
  );
}

function getTagsFromPost(id, db = connection){
  return (
    db('tags')
    .join('post_tag_relations','post_tag_relations.tag_id','tags.id')
    .select('tags.*')
    .where('post_tag_relations.post_id',id)
  )
}
function getPostFromTag(id, db = connection){
  return (
    db('posts')
    .join('post_tag_relations','post_tag_relations.tag_id','post.id')
    .select('posts.*')
    .where('post_tag_relations.post_id',id)
  )
}



// function editPost(data, db = connection) {
//   return (
//     db("posts")
//       .select()
//   );
// }


module.exports = {
  getAllPosts,
  getAllTags,
  addPost,
  getPostById,
  getTagsFromPost,
  getPostFromTag
  
  // editPost
};
