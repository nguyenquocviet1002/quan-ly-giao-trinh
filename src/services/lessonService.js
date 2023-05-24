import { useMutation, useQuery } from "@tanstack/react-query";
import { createLessonFn, deleteLessonFn, getLessonByCurrFn, getLessonByIdFn, updateLessonFn } from "@/api/lessonApi";

export function useGetLessonByCurr(id) {
    const { data: dataLessonByCurr, isLoading: isLoadingLessonByCurr, isSuccess: isSuccessLessonByCurr } = useQuery({
        queryKey: ['lessonByCurr', Number(id)],
        queryFn: () => getLessonByCurrFn(id),
        staleTime: Infinity
    })
    return { dataLessonByCurr, isLoadingLessonByCurr, isSuccessLessonByCurr }
}

export function useGetLessonById(id) {
    const { data: dataLessonById, isLoading: isLoadingLessonById, isSuccess: isSuccessLessonById } = useQuery({
        queryKey: ['lessonById', Number(id)],
        queryFn: () => getLessonByIdFn(id),
        staleTime: Infinity,
    })
    return { dataLessonById, isLoadingLessonById, isSuccessLessonById }
}

export function useCreateLesson(token) {
    const { mutate: mutateCreateLesson, data: dataCreateLesson, isLoading: isLoadingCreateLesson, isSuccess: isSuccessCreateLesson } = useMutation({
        mutationFn: (body) => createLessonFn(token, body)
    })
    return { mutateCreateLesson, dataCreateLesson, isLoadingCreateLesson, isSuccessCreateLesson }
}

export function useUpdateLesson(token, id) {
    const { mutate: mutateUpdateLesson, data: dataUpdateLesson, isLoading: isLoadingUpdateLesson, isSuccess: isSuccessUpdateLesson } = useMutation({
        mutationFn: (body) => updateLessonFn(token, id, body)
    })
    return { mutateUpdateLesson, dataUpdateLesson, isLoadingUpdateLesson, isSuccessUpdateLesson }
}

export function useDeleteLesson(token) {
    const { mutate: mutateDeleteLesson, data: dataDeleteLessoniculum, isLoading: isLoadingDeleteLessoniculum, isSuccess: isSuccessDeleteLessoniculum } = useMutation({
        mutationFn: (id) => deleteLessonFn(token, id)
    })
    return { mutateDeleteLesson, dataDeleteLessoniculum, isLoadingDeleteLessoniculum, isSuccessDeleteLessoniculum }
}