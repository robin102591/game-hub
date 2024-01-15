import axios from 'axios'

export interface FetchResponse<T>{
    count: number,
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9d1b78e9a65449c9919241981f1b05c5'
    }
})