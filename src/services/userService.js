import { useMutation, useQuery } from "@tanstack/react-query";
import { userFn, getAllUserFn, getUserDepartmentFn, updateUserFn, deleteUserFn } from "@/api/userApi";


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
        queryFn: () => getAllUserFn(token),
        staleTime: Infinity
    })
    return { dataAllUser, isLoadingAllUser, isSuccessAllUser }
}

export function useGetUserDepartment(token, id) {
    const { data: dataUserDepartment, isLoading: isLoadingUserDepartment, isSuccess: isSuccessUserDepartment } = useQuery({
        queryKey: ['userDepartment'],
        queryFn: () => getUserDepartmentFn(token, id),
        staleTime: Infinity
    })
    return { dataUserDepartment, isLoadingUserDepartment, isSuccessUserDepartment }
}

export function useUpdateUser(token) {
    const { mutate: muteUpdateUser, data: dataUpdateUser, isLoading: isLoadingUpdateUser, isSuccess: isSuccessUpdateUser } = useMutation({
        mutationFn: ({ id, body }) => updateUserFn(token, id, body)
    })
    return { muteUpdateUser, dataUpdateUser, isLoadingUpdateUser, isSuccessUpdateUser }
}

export function useDeleteUser(token) {
    const { mutate: muteDeleteUser, data: dataDeleteUser, isLoading: isLoadingDeleteUser, isSuccess: isSuccessDeleteUser } = useMutation({
        mutationFn: (id) => deleteUserFn(token, id)
    })
    return { muteDeleteUser, dataDeleteUser, isLoadingDeleteUser, isSuccessDeleteUser }
}