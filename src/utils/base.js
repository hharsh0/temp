const base = {
    get() {
        return {
            url : "http://localhost:8080/liulangdongwubeihua/",
            name: "liulangdongwubeihua",
            // 退出到首页链接
            indexUrl: 'https://zbairyli27.duckdns.org/liulangdongwubeihua/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "流浪动物管理系统"
        } 
    }
}
export default base
