function get(url) {
    return fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers
    }).then(resp => resp.json());
}

function post(url, data) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers,
        body: JSON.stringify({ data: data })
    }).then(resp => resp.json());
}

export const headers = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Credentials': true,
    "Content-Type": "application/json",
    mode: 'cors'
};

export function getData(url = '', data = {}) {
    return get(url)
}

export function postData(data) {
    return post(`http://localhost:8080/file`, data)
}