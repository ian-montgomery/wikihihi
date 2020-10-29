
exports.up = function (knex, Promise) {
    return knex.schema.createTable('tags', function (table) {
        table.increments('id').primary()
        table.string('tag_name')
    })
    }

    exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tags')
    }

