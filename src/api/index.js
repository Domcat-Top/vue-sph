
// 当前模块，API进行统一管理
import requests from './request';

// 三级联动的接口
export const reqCategoryList = () => {
    // 发送请求：axios发送请求，返回结果是Promise对象
    return requests({url: '/product/getBaseCategoryList', method: 'get'});
}











