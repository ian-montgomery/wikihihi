exports.seed = (knex) =>
  knex("post_tag_relations")
    .del()
    .then(() =>
      knex("post_tag_relations").insert([
        { id: 1, post_id: 1, tag_id: 1 },
        { id: 2, post_id: 1, tag_id: 2 },
        { id: 3, post_id: 1, tag_id: 3 },
        { id: 4, post_id: 1, tag_id: 8 },

        { id: 5, post_id: 2, tag_id: 2 },
        { id: 6, post_id: 2, tag_id: 3 },
        { id: 7, post_id: 2, tag_id: 7 },
        { id: 8, post_id: 2, tag_id: 8 },

        { id: 9, post_id: 3, tag_id: 2 },
        { id: 10, post_id: 3, tag_id: 6 },
        { id: 11, post_id: 3, tag_id: 3 },

        { id: 12, post_id: 4, tag_id: 4 },
        { id: 13, post_id: 4, tag_id: 2 },
        { id: 14, post_id: 4, tag_id: 5 },

        { id: 15, post_id: 5, tag_id: 1 },
        { id: 16, post_id: 5, tag_id: 6 },
        { id: 17, post_id: 5, tag_id: 9 },

        { id: 18, post_id: 6, tag_id: 2 },
        { id: 19, post_id: 6, tag_id: 3 },

        { id: 20, post_id: 7, tag_id: 4 },

        { id: 21, post_id: 8, tag_id: 2 },
        { id: 22, post_id: 8, tag_id: 3 },
        { id: 23, post_id: 8, tag_id: 7 },

        { id: 24, post_id: 9, tag_id: 1 },
        { id: 25, post_id: 9, tag_id: 7 },
        { id: 26, post_id: 9, tag_id: 9 },

        { id: 27, post_id: 10, tag_id: 6 },
      ])
    );
