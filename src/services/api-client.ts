import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
    count: number,
    next: string | undefined
    results: T[]
}

// const axiosInstance = axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params: {
//         key: '9d1b78e9a65449c9919241981f1b05c5'
//     }
// })

// class APIClient<T>{
//     endpoint: string
//     constructor(endpoint: string) {
//         this.endpoint = endpoint
//     }

//     getAll(config: AxiosRequestConfig) {
//         return axiosInstance
//             .get<FetchResponse<T>>(this.endpoint, config)
//             .then(res => res.data)
//     }

//     get = (id: number | string) => {
//         return axiosInstance
//             .get<T>(this.endpoint + '/' + id)
//             .then(res => res.data)
//     }
// }

class APIClient<T>{
    axiosInstance = axios.create();

    constructor(private endpoint: string) {
        this.axiosInstance.defaults.baseURL = 'https://api.rawg.io/api';
        this.axiosInstance.defaults.params = {
            key: '9d1b78e9a65449c9919241981f1b05c5'
        }
    }

    getAll(config?: AxiosRequestConfig) {
        return this.axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    }

    get = (id: number | string) => {
        return this.axiosInstance
            .get<T>(`${this.endpoint}/${id}`)
            .then((res) => res.data);
    }
}

export default APIClient