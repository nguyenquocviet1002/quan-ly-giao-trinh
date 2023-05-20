export const filterById = (id, obj) => {
    let i = 0;
    while (obj[i]) {
        if (obj[i].id === id) {
            return obj[i].name
        }
        i++
    }
}