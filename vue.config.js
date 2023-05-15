module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            // 给请求添加一个前缀
            "/api": {
                target: "http://39.98.123.211:8510",
                // 这里就不需要路径重写了----这里才是进行匹配和替换，是我搞反了
                // pathRewrite: {"^/api": ""},
            }
        }
    }
}



