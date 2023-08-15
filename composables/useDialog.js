let dialogRef = ref(undefined)
export let dialogData = ref({
    title: 'Dialog Defulat Title',
    content: 'Dialog Defulat Content',
    confirm: {
        btnName: 'Yes',
        onComplete: () => {
            console.log('Confirm')
        }
    },
    cancel: {
        btnName: 'No',
        onComplete: () => {
            console.log('Cancel')
        }
    }
})

export const useDialog = () => {
    let open = (info) => {
        console.log(info)
        if (info) {
            dialogData.value.title = info.title ?? 'Dialog Defulat Title'
            dialogData.value.content = info.content ?? 'Dialog Defulat Title'
            dialogData.value.confirm = info.confirm ?? {
                btnName: 'Yes',
                onComplete: () => {
                    console.log('Confirm')
                }
            }
            dialogData.value.cancel = info.cancel ?? {
                btnName: 'No',
                onComplete: () => {
                    console.log('Cancel')
                }
            }
        }

        dialogRef.value.showModal()
    }
    let close = (type) => {
        console.log('Your close type =>', type)
        dialogData.value[type].onComplete()
        dialogRef.value.close()
    }
    onMounted(() => {
        dialogRef.value = document.querySelector('#dialog')
    })
    return { open, close }
}
