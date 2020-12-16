exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "steve", password: "sales4life", department: "Sales" },
        { username: "Rach", password: "Dev", department: "Dev" },
        { username: "Joey", password: "1234", department: "Operations" },
      ]);
    });
};
