const express = require('express');
const mySql = require('mysql2');
// const { listenerCount } = require('process');


const app = express();
app.listen(4444, () => {
  console.log('Server is running on port 4444');
});


const connDB = mySql.createConnection({
  host: 'localhost',
  user: 'Sura',
  password: 'Welcome@#123456', // or your actual root password
  database: 'customer'
});

connDB.connect((err) => {
  if(err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
  }
});
      app.get('/users', (req, res) => {
        res.send('Welcome to the Users Page');
        const createTableQuery = `Create Table if not exists users(
          id int auto_increment primary key,
          name varchar(100) not null,
          email varchar(100) not null unique
        )`
        connDB.query(createTableQuery, (err, results) => {
          if(err) {
            console.log('Error creating users table:', err);
          } else {
            console.log('Users table created successfully');
          }
        });
      });




