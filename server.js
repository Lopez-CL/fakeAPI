const express = require('express');
const app = express();
const PORT = 8000;
const {faker} = require('@faker-js/faker');

// Adding middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log(`Server is live and running on port ${PORT}!`)
});

const createUser = ()=>{
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone_number: faker.phone.number(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        _id: faker.datatype.uuid(),
    }
}
const createCompany = ()=>{
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get('/api/users/new',(req,res) =>{
    const newUser = createUser();
    res.json(newUser);
})
app.get('/api/company/company',(req,res) =>{
    const newCompany = createCompany();
    res.json(newCompany);
    console.log(newCompany.name)
})
app.get('/api/user/company', (req,res)=>{
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompObject = {
        user: newUser,
        company: newCompany
    }
    res.json(userCompObject);
})