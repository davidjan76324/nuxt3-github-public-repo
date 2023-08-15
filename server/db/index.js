import mongoose from 'mongoose'

export default async (_nitroApp) => {
    try {
        mongoose.set('strictQuery', true) // 嚴格模式
        await mongoose.connect(
            /*
                注意：從mongodb上貼下來的connect字串，記得修改密碼＋最後加上資料庫名稱
            */
            'mongodb+srv://davidjan76324:1yRxV6jkcqT9M96K@david-nuxt3.qe80gxs.mongodb.net/david-test-nuxt3'
        )
        console.log('連接成功 MongoDB！')
    } catch (e) {
        console.error('連接失敗 MongoDB =>', e)
    }
}
