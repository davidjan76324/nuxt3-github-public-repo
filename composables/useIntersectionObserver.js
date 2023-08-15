export function useIntersectionObserver() {
    let observer = ref(null)
    let isIntersecting = ref(false) // 是否關注的 DOM (Loading Dom) 在畫面
    let elRef = ref(null) // 關注的 DOM (Loading Dom)
    // IntersectionObserver 相關設定
    let optionObj = {
        root: null,
        threshold: 0
    }
    let myIntersectionObserver = (el, options = optionObj) => {
        elRef.value = el
        /*
          IntersectionObserver：用來監控特定物件是否進入畫面！

          Ref: https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
        */
        observer.value = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                console.log(item)
                isIntersecting.value = item.isIntersecting // 如果不再畫面，則 isIntersecting = false
            })
        }, options)

        observer.value.observe(el)
    }

    // 取消 IntersectionObserver
    let unobserver = function () {
        if (observer.value) {
            observer.value.unobserve(elRef.value)
        }
    }

    return {
        isIntersecting,
        elRef,
        myIntersectionObserver,
        unobserver
    }
}
