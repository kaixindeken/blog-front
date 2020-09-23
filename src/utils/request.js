export const BASE_URL = 'http://newblog.test/api/'

export function Extract(d){
    return {
        'data': d.data,
        'message': d.message
    };
}
