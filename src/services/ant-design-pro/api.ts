// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** 注册接口 POST /user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('http://localhost:8080/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录接口 POST /user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('http://localhost:8080/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('http://localhost:8080/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('http://localhost:8080/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 搜索用户 GET /user/search */
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('http://localhost:8080/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('http://localhost:8080/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('http://localhost:8080/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('http://localhost:8080/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('http://localhost:8080/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('http://localhost:8080/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
