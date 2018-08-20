/**
 * @file api.ts
 * @author zhaoli
 *
 * 接口请求文件
 */

import Http from './util/http';
// import LoginLayout from './views/login/LoginLayout';

const http = new Http();

/**
 * http response 拦截器
 */
http.response(
    res => {
        if (res.data.code === 401) {
            // LoginLayout();
            return Promise.reject(res);
        } else if (res.data.code !== 200) {
            /*
            // Local Error > Server Error
            const { code, message } = res.data;
            const errText = ERRORTEXT[code];
            if (typeof message === 'string' || errText) {
                const err = errText || message;
                message.error(err);
            }
            */
        }
        return Promise.resolve(res);
    },
    err => {
        if (err.response) {
            const status = err.response.status;
            if (status === 401) {
                // LoginLayout();
            }
        }
        return Promise.reject(err);
    }
);

/**
 * 登录 Api
 */
export const login = (params) => http.post('/login', params);

/**
 * 获取用户信息
 */
export const fetchUser = () => http.get('/user');

/**
 * Others
 */
export const fetchBookList = () => http.get('/book');

export const fetchBookDetail = (params) => http.get('/bookDetail', params);

