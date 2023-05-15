
// 当前模块，API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';

// 三级联动的接口
export const reqCategoryList = () => {
    // 发送请求：axios发送请求，返回结果是Promise对象
    return requests({url: '/product/getBaseCategoryList', method: 'get'});
}

// 获取首页轮播图的接口
export const reqBannerList = () => {
    return mockRequests({url: 'banner', method: 'get'});
}










