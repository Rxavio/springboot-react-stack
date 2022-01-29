import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/employees');
}

const create = data => {
    return httpClient.post("/employees", data);
}

const update = data => {
    return httpClient.put('/employees', data);
}

export default { getAll,create,update};