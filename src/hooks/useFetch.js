import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {

    const [urlApi, setUrlApi] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setUrlApi(res.data)
                setHasError(false)
            })
            .catch(error => {
                console.log(error)
                setHasError(true)
            })
            .finally(() => setIsLoading(false))
    }
    return [urlApi, getApi, isLoading, hasError]
}

export default useFetch