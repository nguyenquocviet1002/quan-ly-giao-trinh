export const filterById = (id, obj) => {
    let i = 0;
    while (obj[i]) {
        if (obj[i].id === Number(id)) {
            return obj[i].name
        }
        i++
    }
}