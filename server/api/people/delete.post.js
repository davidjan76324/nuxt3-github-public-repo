import peopleModel from '@/server/model/peoples.model'

export default defineEventHandler(async (event) => {
    let body = await readBody(event)
    let { id } = body
    await peopleModel.deleteOne({ _id: id })

    return { Code: 200, Msg: 'Success!' }
})
