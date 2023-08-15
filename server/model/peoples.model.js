import mongoose from 'mongoose'

// people schema
const peopleSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: String
    }
})

const peopleModel = mongoose.model('david-test-nuxt3', peopleSchema, 'people') // .model(資料庫名稱, schema, 資料表名稱)

// people model
export default peopleModel
