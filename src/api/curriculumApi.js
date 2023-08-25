import http from "./http";

export const getAllCurriculumFn = () => {
    return http.get('/curriculum')
}

export const getCurriculumDepartmentFn = ({ id, name }) => {
    return http.get(`/curriculum?${id && `department_id=${id}&`} ${name && `name=${name}`}`)
}

export const getCurriculumByIdFn = (id) => {
    return http.get(`/curriculum/${id}`)
}

export const createCurriculumFn = (token, body) => {
    return http.post('/curriculum/create', JSON.stringify(body), {
        headers: { 'Authorization': token }
    })
}

export const updateCurriculumFn = (id, body) => {
    return http.put(`/curriculum/${id}`, JSON.stringify(body))
}

export const deleteCurriculumFn = (token, id) => {
    return http.delete(`/curriculum/${id}`, {
        headers: { 'Authorization': token }
    })
}