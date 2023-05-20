import http from "./http";

export const userFn = (token) => (
    http.get('/user', {
        headers: { Authorization: token }
    })
)

export const getAllFn = (token) => (
    http.get('/get-all-user', {
        headers: { Authorization: token }
    })
)