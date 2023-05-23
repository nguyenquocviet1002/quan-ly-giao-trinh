import { useMutation, useQuery } from "@tanstack/react-query";
import { createCurriculumFn, getAllCurriculumFn, getCurriculumByIdFn, getCurriculumDepartmentFn } from "@/api/curriculumApi";


export function useGetCurriculum() {
    const { data: dataCurriculum, isLoading: isLoadingCurriculum, isSuccess: isSuccessCurriculum } = useQuery({
        queryKey: ['curriculums'],
        queryFn: () => getAllCurriculumFn(),
        staleTime: Infinity
    })
    return { dataCurriculum, isLoadingCurriculum, isSuccessCurriculum }
}

export function useGetCurriculumDepartment(id) {
    const { data: dataCurriculumDepartment, isLoading: isLoadingCurriculumDepartment, isSuccess: isSuccessCurriculumDepartment } = useQuery({
        queryKey: ['curriculumsDepartment', id],
        queryFn: () => getCurriculumDepartmentFn(id),
        staleTime: Infinity
    })
    return { dataCurriculumDepartment, isLoadingCurriculumDepartment, isSuccessCurriculumDepartment }
}

export function useGetCurriculumById(id) {
    const { data: dataCurriculumById, isLoading: isLoadingCurriculumById, isSuccess: isSuccessCurriculumById } = useQuery({
        queryKey: ['curriculumsById', id],
        queryFn: () => getCurriculumByIdFn(id),
        staleTime: Infinity
    })
    return { dataCurriculumById, isLoadingCurriculumById, isSuccessCurriculumById }
}

export function useCreateCurriculum(token) {
    const { mutate: mutateCreateCurr, data: dataCreateCurriculum, isLoading: isLoadingCreateCurriculum, isSuccess: isSuccessCreateCurriculum } = useMutation({
        mutationFn: (body) => createCurriculumFn(token, body)
    })
    return { mutateCreateCurr, dataCreateCurriculum, isLoadingCreateCurriculum, isSuccessCreateCurriculum }
}
