// 引入mockJS
import Mock from 'mockjs';

// 把Json格式引入
import banner from './banner.json';

// 请求地址，请求数据
Mock.mock(
    "/mock/banner", 
    {code: 200, data: banner}
    );

