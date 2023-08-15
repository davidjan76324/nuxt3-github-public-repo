import peopleModel from '@/server/model/peoples.model'

export default defineEventHandler(async (event) => {
    let body = await readBody(event)
    let { id, name } = body
    let oldData = await peopleModel.findOne({ _id: id })
    await peopleModel.updateOne(oldData, { name })
    await oldData.save()

    return { Code: 200, Msg: 'Success!' }
})
