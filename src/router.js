/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/test': {
        meta: {
            title: '测试界面'
        },
        component (resolve) {
            require(['./views/test.vue'], resolve);
        }
    }
};
export default routers;