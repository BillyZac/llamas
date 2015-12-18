

exports.up = function(knex, Promise) {
  return knex.schema.createTable('llamas',function(table){
      table.increments();
      table.string('name');
      table.string('image_url');
  });
};

exports.down = function(knex, Promise) {

};
