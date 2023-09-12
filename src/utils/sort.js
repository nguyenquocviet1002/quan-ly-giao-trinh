export const sort = (obj, key) => {
    const label = [];
    const data = [];
    const byData = obj.slice(0);
    byData.sort(function (a, b) {
        return b[key] - a[key];
    });
    byData.map(item => { label.push(item.name); data.push(item[key]); return true; });
    return { label: label.splice(0, 5), data: data.splice(0, 5) }
}

