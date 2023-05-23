import { useMutation } from "@tanstack/react-query";
import { uploadImageFn } from "@/api/fileApi";

export function useUploadImage() {
    const { mutate: mutateUploadImage, data: dataImage, isLoading: isLoadingImage, isSuccess: isSuccessImage, isError: isErrorImage } = useMutation({
        mutationFn: (body) => uploadImageFn(body)
    })
    return { mutateUploadImage, dataImage, isLoadingImage, isSuccessImage, isErrorImage }
}