import { extend } from "umi-request"

export const requestUrl = 'http://192.168.1.2/editor/api'
// export const requestUrl = '/editor/api' //测试代理需要，正式解决跨域，应用上面的，并删除setupProxy文件或者注释即可

const request = extend({
    prefix: requestUrl,
    timeout: 10000,
    requestType: 'form', //默认form形式，可以设置成 json
    credentials: 'include' //跨域是使用，否则不用写这个参数
})

/** 创建项目 POST,修改 PUT，删除 DELETE ，获取项目列表GET*/
//获取列表GET
export async function requestByProjectInfo(
    params,
    options
) {
    return request('/project/list', {
        method: 'GET',
        params: params ? params : {},
        ...(options || {}),
    })
}

//创建POST
export async function requestByCreateProject(
    body,
    params,
    options
) {
    return request('/project', {
        method: 'POST',
        params,
        data: body,
        ...(options || {}),
    })
}

//修改 PUT
export async function requestByModifyProject(
    body,
    params,
    options
) {
    return request('/project', {
        method: 'PUT',
        params,
        data: body,
        ...(options || {}),
    })
}

//删除 DELETE
export async function requestByDeleteProject(
    body,
    params,
    options
) {
    return request('/project', {
        method: 'DELETE',
        params,
        data: body,
        ...(options || {}),
    })
}