exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 127).unique().notNullable();
    tbl.string("password", 125).notNullable();
    tbl.string("department", 50).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
