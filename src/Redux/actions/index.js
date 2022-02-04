export const saveData = (data) => {
    return {
        type: "SAVE_DATA",
        payload: data
    }
}

export const getData = (data) => {

    return {
        type: "GET_DATA",
        payload: data
    }
}


