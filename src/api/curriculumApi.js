import http from "./http";

export const getAllCurriculumFn = () => {
    return http.get('/curriculum')
}

export const getCurriculumDepartmentFn = (id) => {
    return http.get(`/curriculum?department_id=${id}`)
}

export const getCurriculumByIdFn = (id) => {
    return http.get(`/curriculum/${id}`)
}

export const createCurriculumFn = (token, body) => {
    return http.post('/curriculum/create', JSON.stringify(body), {
        headers: { 'Authorization': token }
    })
}