export const useRepoSearch = () => {
    const { resetData, fetchUserData, fetchRepos } = useIndexStore()

    const searchData = async (name) => {
        console.log('searchData --Start!!')
        resetData()
        await fetchUserData(name)
        await fetchRepos(name)
        console.log('searchData --End!!')
    }

    return {
        searchData
    }
}
