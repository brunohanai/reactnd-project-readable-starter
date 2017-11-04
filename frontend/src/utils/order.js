// TODO: ajustar para quando o valor nao for numerico
export function orderObjectArrayByObjectKey (object_array, key, direction = 'asc') {
    let copy = [...object_array]

    return copy.sort((a, b) => {
        const value1 = direction === 'asc' ? a[key] : b[key]
        const value2 = direction === 'asc' ? b[key] : a[key]

        return value1 - value2
    })
}