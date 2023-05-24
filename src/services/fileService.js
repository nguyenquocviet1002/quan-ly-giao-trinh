import { useMutation } from "@tanstack/react-query";
import { uploadFileFn, uploadImageFn } from "@/api/fileApi";

export function useUploadImage() {
    const { mutate: mutateUploadImage, data: dataImage, isLoading: isLoadingImage, isSuccess: isSuccessImage, isError: isErrorImage } = useMutation({
        mutationFn: (body) => uploadImageFn(body)
    })
    return { mutateUploadImage, dataImage, isLoadingImage, isSuccessImage, isErrorImage }
}

export function useUploadFile() {
    const { mutate: mutateUploadFile, data: dataFile, isLoading: isLoadingFile, isSuccess: isSuccessFile, isError: isErrorFile } = useMutation({
        mutationFn: (body) => uploadFileFn(body)
    })
    return { mutateUploadFile, dataFile, isLoadingFile, isSuccessFile, isErrorFile }
}