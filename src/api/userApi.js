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