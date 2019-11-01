import axios from 'axios';

/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
    // baseURL: env.baseUrl,
    timeout: 30000,
    // withCredentials: env.credential
});

// 请求拦截器
AJAX.interceptors.request.use({
    function(config) {
        // 在发送请求之前做些什么
        // if (process.env.NODE_ENV === 'development') {
        //     config.url = `http://${location.host}` + config.url;           // 自定义反向代理
        // }
        // if (config.url.indexOf("/v") == -1) {
        //     config.url = "/v1" + config.url;
        // }
        // 请求头添加authKey参数
        // let authKey = localStorage.getItem("authKey");
        // if (authKey) {
        //     config.headers["authKey"] = authKey;
        // }
        return config;
    },
    // eslint-disable-next-line
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
});

// 添加响应拦截器
AJAX.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        // if (response.data.responseStatus.code === "9995") {
        // Toast({
        //     message: response.data.responseStatus.message,
        //     duration: 1000
        // });
        // setTimeout(res => {
        //     localStorage.clear();
        //     router.push("/login");
        // }, 1000);
        // return Promise.reject(response.data);
        // }
        if (response.status !== 200) {
            // Toast({
            //     message: response.data.responseStatus.message,
            //     duration: 1000
            // });
            return Promise.reject(response.data);
        }
        return response.data;
    },
    (error) => {
        // 对响应错误做点什么，比如400、401、402等等
        if (error && error.response) {
            // eslint-disable-next-line no-console
            console.log(error.response);
        }
        return Promise.reject(error);
    },
);

// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {
        // "Content-Type":'application/json; charset=UTF-8'
    }) {
        return AJAX.get(url, {
            params: param,
            headers,
        });
    },
    post(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers,
        });
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers,
        });
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: { 'Content-Type': 'multipart/form-data', ...headers },
        });
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: { 'Content-Type': 'multipart/form-data', ...headers },
        });
    },
};
