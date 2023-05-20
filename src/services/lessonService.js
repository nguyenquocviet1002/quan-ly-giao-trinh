import { useQuery } from "@tanstack/react-query";
import { getLessonByCurrFn } from "@/api/lessonApi";


export function useGetLessonByCurr(id) {
    const { data: dataLessonByCurr, isLoading: isLoadingLessonByCurr, isSuccess: isSuccessLessonByCurr } = useQuery({
        queryKey: ['lessonByCurr', id],
        queryFn: () => getLessonByCurrFn(id),
        staleTime: Infinity
    })
    return { dataLessonByCurr, isLoadingLessonByCurr, isSuccessLessonByCurr }
}