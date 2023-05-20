import http from "./http";

export const getLessonByCurrFn = (id) => {
    return http.get(`/lesson?curriculum_id=${id}`)
}