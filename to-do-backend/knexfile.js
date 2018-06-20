// Update with your config settings.

// knexfile.js
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'postgres', // or other user if you made one
    password: 'Se5MkcUX',
    database: 'fullstack_todo'
  }
};