export default defineEventHandler(async (event) => {
    let body = await readBody(event)
    let { username, password } = body
    console.log('your post login info =>', username, password)

    return { Code: 200, Msg: 'Success!' }
})
