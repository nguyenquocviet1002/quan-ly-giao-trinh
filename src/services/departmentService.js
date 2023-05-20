import { useQuery } from "@tanstack/react-query";
import { getDepartmentFn } from "@/api/departmentApi";


export function useGetDepartment() {
    const { data: dataDepartment, isLoading: isLoadingDepartment, isSuccess: isSuccessDepartment } = useQuery({
        queryKey: ['department'],
        queryFn: () => getDepartmentFn(),
        staleTime: Infinity
    })
    return { dataDepartment, isLoadingDepartment, isSuccessDepartment }
}