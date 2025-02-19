const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI

const connect = async() => {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Banco de dados conectado! :)")
    }catch(error){
        console.log(error.message)
    }
}

const get = async() => {
    try{
        await mongoose.get(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Banco de dados get! :)")
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    connect,
    get
};