import { organizingCommitte } from "../data"

export const getData = (param) => {
    const data = Object.keys(organizingCommitte);
    const key = data.filter((item, index) => item === param)
    if(key.length === 0){
        return []
    }
    else {
        return organizingCommitte[key]
    }
}