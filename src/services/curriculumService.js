import { useQuery } from "@tanstack/react-query";
import { getAllCurriculumFn, getCurriculumDepartmentFn } from "@/api/curriculumApi";


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
