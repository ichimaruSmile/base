import call from './call';

const network = {
    token: null,
    try: 5,
};

// 此处应该拦截
// 1.授权情况
// 2.错误处理
// 3.错误发生的善后
async function request({
    url,
    method = 'GET',
    params = null,
    data = null,
    options = Object.create(null),
} = Object.create(null)) {

    // auth
    // if (!data.user) {
    //     console.log('need auth');
    //     return handleUserAuthLogin();
    // }

    const [error, response] = await call({
        url,
        method,
        params,
        data,
    }, options);

    if (!!error) {
        return handleRequestError(error)
    }

    return response.data
}

function handleRequestError(error) {
    // serves => are inconsistent with expectations
    console.log('handleRequestError', error)

    return '123123'
}

function handleUserAuthLogin() {
    // 静默授权，发起登录请求
    // 非静默授权，发起跳转请求
}

export default function install(Vue) {
    Vue.prototype.request = request
}
