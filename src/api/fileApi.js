import axios from 'axios';

const baseURL = 'https://scigroup.com.vn/app/upload/public/api';

export const uploadImageFn = (data) => {
    return (
        axios.post(`${baseURL}/upload-image`, { image: data }, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
    )
}