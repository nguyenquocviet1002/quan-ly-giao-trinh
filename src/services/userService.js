import { useQuery } from "@tanstack/react-query";
import { userFn, getAllFn } from "@/api/userApi";


export function useGetUser(token) {
    const { data: dataUser, isLoading: isLoadingUser, isSuccess: isSuccessUser } = useQuery({
        queryKey: ['user', token],
        queryFn: () => userFn(token),
        staleTime: Infinity
    })
    return { dataUser, isLoadingUser, isSuccessUser }
}

export function useGetAllUser(token) {
    const { data: dataAllUser, isLoading: isLoadingAllUser, isSuccess: isSuccessAllUser } = useQuery({
        queryKey: ['userAll'],
        queryFn: () => getAllFn(token),
        staleTime: Infinity
    })
    return { dataAllUser, isLoadingAllUser, isSuccessAllUser }
}