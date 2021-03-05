import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

async function call({
    method,
    url,
    params,
    data,
}, options) {
    // set auth header by options
    // ...

    const r = await axios({
        baseURL: 'http://127.0.0.1:3000',
        method,
        url,
        params,
        data,
        ...options
    })
        .then((data) => [null, data])
        .catch((error) => [error, null])

    console.log(`URL[${url}] response =>`, r);

    const [error, response] = r;

    // network return => are inconsistent with expectations
    if (!!error) return handleNetworkError(error);

    if (!response.data) return handleCallError(response)

    if (response.data.code !== 1) return handleCallError(response)

    return [null, response]
}

function handleNetworkError(error) {
    // [system]api or network are error (maybe [client]params error)
    console.log('handleNetworkError', error)

    // 查看网络状态
    const connection = navigator.connection;
    console.log('connection', connection, connection.type);

    if (connection.effectiveType === '2g') {
        return [{ code: 1001, msg: '2g网你搁这凑什么热闹????????'}, null]
    }

    // default
    return [{ code: 1000, msg: '网络信号差'}, null]
}

function handleCallError(response) {
    // serves return are inconsistent with expectations
    console.log('handleCallError', response)

    if (!response.data) {
        return [{ code: 1000, msg: '服务器状态与预期不一致'}, null]
    }

    // default
    return [{ code: response.data.code, msg: '服务器状态与预期不一致'}, null]
}

export default call
