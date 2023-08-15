import peopleModel from '@/server/model/peoples.model'

export default defineEventHandler(async (event) => {
    console.log('======= post api people')
    console.log(event)
    let peoples = await peopleModel.find({})
    return peoples
})
