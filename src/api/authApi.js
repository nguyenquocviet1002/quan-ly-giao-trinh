import http from "./http";

export const registerFn = (body) => (
    http.post('/register', JSON.stringify(body))
)

export const loginFn = (body) => (
    http.post('/login', JSON.stringify(body))
)

export const changePasswordFn = (token, body) => (
    http.post('/reset-password', JSON.stringify(body), {
        headers: { Authorization: token }
    })
)