import http from "./http";

export const createCurriculumFn = (body) => {
    return http.post('/curriculum/create', body)
}