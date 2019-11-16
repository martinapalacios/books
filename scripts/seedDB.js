const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user1:password1@ds029817.mlab.com:29817/heroku_d2pmlmg4"
);

const bookSeed = {
  authors: ["Edward Snowden"],
  description:
    "Edward Snowden, the man who risked everything to expose the US government’s system of mass surveillance, reveals for the first time the story of his life, including how he helped to build that system and what ...",
  image:
    "https://books.google.com/books?id=0XCcDwAAQBAJ&printsec=frontcover&dq=ed+snowden&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjwr5GBp9LlAhVPQq0KHUvSC7kQ6wEwAHoECAkQAQ",
  link:
    "https://books.google.com/books?id=0XCcDwAAQBAJ&printsec=frontcover&dq=Permanent+Record&hl=&cd=1&source=gbs_api#v=onepage&q=Permanent%20Record&f=false",
  title: "Permanent Record"
};

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
