import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/',
    headers: {"Content-Type": "application/json"}
});

axiosInstance.interceptors.request.use((requestObject)=> {
    if(requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = `Bearer ${REQUEST_TOKEN}`
    }
    return requestObject
})

const REQUEST_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjcwNThjOTc5Mjg3ZTZkMTcwZGU2MDNmY2JhMDIzMiIsIm5iZiI6MTc5MTExNTk0NS45OTUwMDAxLCJzdWIiOiI2YWMyNDJhOTVlY2NiNjk3YzAzMjQ1NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Q8thC3I59qx-NMetImEx4FsmFaLDHC-3af4oarRI_4Q"

export const getMovies = async (page:string)=> {
    const {data} = await axiosInstance.get(`3/discover/movie?page=${page}`);
    console.log(data)
    return data.results
}
export const getMovie = async (id:string | undefined)=> {
    const {data} = await axiosInstance.get(`3/movie/${id}`);
    console.log(data)
    return data
}