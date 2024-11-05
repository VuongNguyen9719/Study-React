export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const deepEqualObject = (obj1, obj2) => {
    if (obj1 === obj2) return true;

    if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqualObject(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export const pickObject = (obj, fields) => {
    return fields.reduce((result, field) => {
        if (field in obj) {
            result[field] = obj[field];
        }
        return result;
    }, {});
}

export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}