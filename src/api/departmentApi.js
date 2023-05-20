import http from "./http";

export const getDepartmentFn = () => {
    return http.get('/department')
}