import { useMutation } from "@tanstack/react-query";
import { changePasswordFn, loginFn, registerFn } from '@/api/authApi'

export function useRegister() {
    const { mutate: mutateRegister, isLoading: isLoadingRegister, isSuccess: isSuccessRegister } = useMutation({
        mutationFn: (body) => registerFn(body)
    })
    return { mutateRegister, isLoadingRegister, isSuccessRegister }
}

export function useLogin() {
    const { mutate: mutateLogin, data: dataLogin, isLoading: isLoadingLogin, isSuccess: isSuccessLogin } = useMutation({
        mutationFn: (body) => loginFn(body)
    })
    return { mutateLogin, dataLogin, isLoadingLogin, isSuccessLogin }
}

export function useChangePassword() {
    const { mutate: mutateChangePassword, data: dataChangePassword, isLoading: isLoadingChangePassword, isSuccess: isSuccessChangePassword } = useMutation({
        mutationFn: (body) => changePasswordFn(body)
    })
    return { mutateChangePassword, dataChangePassword, isLoadingChangePassword, isSuccessChangePassword }
}