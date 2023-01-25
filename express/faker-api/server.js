const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
  const newFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number("(###) ###-####"),
    username: faker.internet.userName(),
    id: faker.datatype.uuid()
  }
  return newFake;
}

const createCompany = () => {
  const newFake = {
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return newFake;
}

const newFakeUser = createUser()
const newFakeCompany = createCompany()
const userCompany = [createUser(), createCompany()]

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Hello World");
})

app.get("/api/users/new", (req, res) => {
  res.json( newFakeUser );
});

app.get("/api/companies/new", (req, res) => { 
  res.json( newFakeCompany );
});

app.get("/api/user/companies/new", (req, res) => {
  res.json( userCompany );
});

const server = app.listen(8001, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// write me a function that multiplies by 6
// cmd shift p
// cmd shift i