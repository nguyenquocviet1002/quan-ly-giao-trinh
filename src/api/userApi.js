import http from "./http";

export const userFn = (token) => (
    http.get('/user', {
        headers: { Authorization: token }
    })
)

export const getAllUserFn = (token) => (
    http.get('/get-all-user', {
        headers: { Authorization: token }
    })
)

export const getUserDepartmentFn = (token, id) => (
    http.get(`/get-all-user?departmentId=${id}`, {
        headers: { Authorization: token }
    })
)

export const updateUserFn = (token, id, body) => (
    http.put(`/user/${id}`, JSON.stringify(body), {
        headers: { Authorization: token }
    })
)

export const deleteUserFn = (token, id) => (
    http.delete(`/user/${id}`, {
        headers: { Authorization: token }
    })
)

