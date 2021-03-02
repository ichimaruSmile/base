const ErrorMap = {
  UNKNOWN: {
    code: -1,
    msg: '请求失败：未知错误',
    extra: null
  },
  TIME_OUT: {
    code: -100,
    msg: '请求失败：无法连接到服务器',
    extra: null
  },
  NO_RETURN_DATA: {
    code: -101,
    msg: '请求失败：服务器未返回数据',
    extra: null
  },
  LOCAL_NOT_LOGIN: {
    code: -102,
    msg: '请求失败：请先登录',
    extra: null
  },
  LOCAL_API_ERROR: {
    code: -200,
    msg: '请求失败：调用本地API出错',
    extra: null
  },
  NO_NETWORK: {
    code: -201,
    msg: '请求失败：当前设备网络信号弱',
    extra: null
  },
  NO_PERMISSION: {
    code: 100,
    msg: '请求失败：登录失效请重新登录',
    extra: null
  },
  SERVER_ERROR: {
    code: 101,
    msg: '请求失败：服务器内部错误',
    extra: null
  },
  REQUEST_PARAMS_ERROR: {
    code: 102,
    msg: '请求失败：请求参数错误',
    extra: null
  },
  REPEAT_DATA: {
    code: 1000,
    msg: '',
    extra: null
  },
  BUSI_ERROR: { // 其他业务错误
    code: -1000,
    msg: ''
  }
}

Object.keys(ErrorMap).forEach(key => {
  ErrorMap[key].name = key;
});

// 获取错误类型
const findError = (code) => {
  const keys = Object.keys(ErrorMap);
  let error = null;
  for (let i = 0; i < keys.length; i++) {
    const currentError = ErrorMap[keys[i]];
    if (ErrorMap[keys[i]].code === code) {
      error = currentError;
      break;
    }
  }
  return error || ErrorMap.UNKNOWN;
}

export {
  ErrorMap,
  findError
}
