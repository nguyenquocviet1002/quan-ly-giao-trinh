import http from "./http";

export const getLessonByCurrFn = (id) => {
    return http.get(`/lesson?curriculum_id=${id}`)
}

export const getLessonByIdFn = (id) => {
    return http.get(`/lesson/${id}`)
}

export const createLessonFn = (token, body) => {
    return http.post(`/lesson/create`, JSON.stringify(body), {
        headers: { 'Authorization': token }
    })
}

export const updateLessonFn = (token, id, body) => {
    return http.put(`/lesson/${id}`, JSON.stringify(body), {
        headers: { 'Authorization': token }
    })
}

export const deleteLessonFn = (token, id) => {
    return http.delete(`/lesson/${id}`, {
        headers: { 'Authorization': token }
    })
}