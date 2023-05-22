import http from "./http";

export const getAllCurriculumFn = () => {
    return http.get('/curriculum')
}

export const getCurriculumDepartmentFn = (id) => {
    return http.get(`/curriculum?department_id=${id}`)
}

export const createCurriculumFn = (body) => {
    return http.post('/curriculum/create', body)
}