const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    children:[
        {
            path:'/',
            component: (resolve) => require(['./views/product/'], resolve)
        },
        {
            path:'/product',
            component: (resolve) => require(['./views/product/'], resolve)
        },
        {
            path:'/friend',
            component: (resolve) => require(['./views/friend/'], resolve)
        }
    ],
    component: (resolve) => require(['./views/container.vue'], resolve)
}];
export default routers;