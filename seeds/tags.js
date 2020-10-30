exports.seed = (knex) =>
  knex("tags")
    .del()
    .then(() =>
      knex("tags").insert([
        { id: 1, tag_name: "week 1" },
        { id: 2, tag_name: "week 2" },
        { id: 3, tag_name: "week 3" },
        { id: 4, tag_name: "week 4" },
        { id: 5, tag_name: "week 5" },
        { id: 6, tag_name: "css" },
        { id: 7, tag_name: "hmtl" },
        { id: 8, tag_name: "javascript" },
        { id: 9, tag_name: "hbs" },
        { id: 10, tag_name: "knex" },
        { id: 11, tag_name: "routes" },
        { id: 12, tag_name: "async" },
        { id: 13, tag_name: "callbacks" },
        { id: 14, tag_name: "memes" },
        { id: 15, tag_name: "jest" },
        { id: 16, tag_name: "npm" },
        { id: 17, tag_name: "git" },
        { id: 18, tag_name: "extensions" },
        { id: 19, tag_name: "express" },
        { id: 20, tag_name: "server-side rendering" },
        { id: 21, tag_name: "promises" },
        { id: 22, tag_name: "join collisions" }
      ])
    );
