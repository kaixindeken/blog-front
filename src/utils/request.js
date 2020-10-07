export const BASE_URL = 'https://nbapi.kaixindeken.top/api/'

export function Extract(d){
    return {
        'data': d.data,
        'message': d.message
    };
}
