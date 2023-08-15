const fs = require('fs-extra')
const unflatten = require('flat').unflatten
const { extractSheets } = require('spreadsheet-to-json')
const path = require('path')
extractSheets(
    {
        spreadsheetKey: '11jbrzwouehhBDpBJHpO7ahSvewz2BtBYX-U2un_YkIA',
        credentials: require('./google/nuxt3-davidjan-i18n-test-52165d970d35.json'),
        sheetsToExtract: ['index']
    },
    (err, data) => {
        if (err) throw err
        const read = [...data['index']]
        const result = {}
        const files = []

        for (const key in read[0]) {
            if (key !== 'key') {
                files.push(key)
                result[key] = {}
            }
        }
        read.forEach((el) => {
            for (const file of files) {
                result[file][el['key']] = el[file] ? el[file] : ''
            }
        })
        for (const fileName of files) {
            fs.ensureDirSync(path.dirname(path.resolve(__dirname, './language', `${fileName}.json`)))
            fs.writeJSONSync(
                path.resolve(__dirname, './language', `${fileName}.json`),
                unflatten(result[fileName], { object: true }),
                { spaces: 2 }
            )
        }
    }
)
