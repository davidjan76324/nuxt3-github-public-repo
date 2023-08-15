<template>
    <h1>Peoples information from MongoDB</h1>
    <div>{{ peopleAllInfo }}</div>
    <div>
        <p>Get</p>
        <ul>
            <li v-for="item in peopleAllInfo" :key="item._id">
                id:{{ item._id }}/ Name:{{ item.name }}/ Email:{{ item.email }}/ Age: {{ item.age }}
            </li>
        </ul>
    </div>
    <hr />
    <div>
        <p>Add</p>
        <div>
            <input type="text" v-model="addInfo.name" placeholder="Name..." />
            <input type="email" v-model="addInfo.email" placeholder="Email..." />
            <input type="number" v-model="addInfo.age" placeholder="Age..." />
        </div>
        <div>
            <button @click="add">Add</button>
        </div>
    </div>
    <div>
        <p>Update</p>
        <div>
            <input type="text" v-model="updateInfo.id" placeholder="Id..." />
            <input type="text" v-model="updateInfo.name" placeholder="Name..." />
            <p>{{ updateInfo }}</p>
            <button @click="update">Update</button>
        </div>
    </div>
    <div>
        <p>Delete</p>
        <div>
            <input type="text" v-model="deleteInfo.id" placeholder="Id..." />
            <p>{{ deleteInfo }}</p>
            <button @click="mydelete">Delete</button>
        </div>
    </div>
    <div>
        <button @click="refreshInfo">Refresh</button>
    </div>
</template>
<script setup>
    //-- Imports
    /*
        此步驟一開始由 server 打api＋SSR呈現，refresh 則改由 client 打 api(可以由api內映出event的req中有client參數！)(沒SSR呈現)
    */
    let { data: peopleAllInfo, refresh: peopleAllRefresh } = await useAsyncData('getAllPeoples', () =>
        $fetch('/api/people')
    )
    // let { data: peopleAllInfo, refresh: peopleAllRefresh } = await useFetch('/api/people')
    // useAsyncData('getAllPeoples2', () => {
    //     $fetch('/api/people')
    // })

    //-- Params
    let addInfo = ref({
        name: '',
        age: '',
        email: ''
    })
    let updateInfo = ref({
        id: '',
        name: ''
    })

    let deleteInfo = ref({
        id: ''
    })

    //-- Functions
    let resetAddInfo = function () {
        Object.keys(addInfo.value).forEach(function (key) {
            addInfo.value[key] = ''
        })
    }
    let add = async function () {
        /*
            此步驟由client打api(沒SSR呈現)

            注意：如果使用 useFetch 時，body內參數如有變動，則會再 post(感覺是迭代)！所以最好使用 useAsyncData 以防萬一！
            Ref: https://github.com/nuxt/nuxt/issues/12466
        */
        let { data: addReturnInfo } = await useAsyncData('addPost', () => {
            return $fetch('/api/people/create', {
                method: 'POST',
                body: addInfo.value
            })
        })
        let { Code, Msg } = addReturnInfo.value
        if (Code === 200) alert(Msg)

        await peopleAllRefresh() // await post again 有 SSR
        resetAddInfo() // 清空輸入資訊
    }

    let update = async function () {
        if (!updateInfo.value.name || !updateInfo.value.id) {
            alert('Please input update info, Name and ID!')
            return
        }
        let { data: editReturnInfo } = await useAsyncData('editPost', () => {
            return $fetch('/api/people/update', {
                method: 'POST',
                body: updateInfo.value
            })
        })

        let { Code, Msg } = editReturnInfo.value
        if (Code === 200) alert(Msg)

        await peopleAllRefresh() // await post again 有 SSR
    }

    let mydelete = async function () {
        if (!deleteInfo.value.id) {
            alert('Please input Delete ID!')
            return
        }
        let { data: deleteReturnInfo } = await useAsyncData('deletePost', () => {
            return $fetch('/api/people/delete', {
                method: 'POST',
                body: deleteInfo.value
            })
        })
        console.log(deleteReturnInfo.value)
        let { Code, Msg } = deleteReturnInfo.value
        if (Code === 200) alert(Msg)

        await peopleAllRefresh() // await post again 有 SSR
    }

    let refreshInfo = async function () {
        await peopleAllRefresh() // await post again 有 SSR
    }
</script>
<style lang="scss"></style>
