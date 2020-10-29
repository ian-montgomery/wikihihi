exports.up = function (knex, Promise) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id").primary();
    table.string("title");
    table.string("content");
    table.string("video_url");
    table.string("link_url")
    table.string("author");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("posts");
};
