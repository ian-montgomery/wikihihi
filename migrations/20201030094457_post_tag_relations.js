exports.up = function (knex, Promise) {
    return knex.schema.createTable('post_tag_relations', function (table) {
      table.increments('id').primary()
      table.integer('post_id')
      table.integer('tag_id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('post_tag_relations')
  }