exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
        table.string('URL')
        table.string('profile_picture') 
        table.string('blurb')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profiles')
  }
  