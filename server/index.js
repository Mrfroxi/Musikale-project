require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 49152

const app = express()

const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT , () => console.log(`server started ${PORT}`))
    }catch(e) {
        console.log(e)
    }
}


start()