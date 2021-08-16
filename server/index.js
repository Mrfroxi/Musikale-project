require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors()) // Cors для всех 
app.use(express.json()) //Парсить json 
app.use('/api',router)


app.use(errorHandler)//обработка ошибок



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