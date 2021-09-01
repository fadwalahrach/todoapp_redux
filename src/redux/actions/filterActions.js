import {FILTERTODO} from '../constants/index'

export function visibilityFilter(data){
    return {
        type:FILTERTODO,
        data
    }
}