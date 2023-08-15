import peopleModel from '@/server/model/peoples.model'

export default defineEventHandler(async (event) => {
    let body = await readBody(event)
    let { name, email, age } = body
    let people = new peopleModel({ name: name, age: age, email: email })
    await people.save()

    return { Code: 200, Msg: 'Success!' }
})
