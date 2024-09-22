import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export enum RouteName {
    Home = 'home',
    Dimensions = 'dimensions',
    Edges = 'edges',
    Palette = 'palette',
    Sinks = 'sinks',
    Addons = 'addons',
    Result = 'result',
    Settings = 'settings',
    NotFound = 'notFound',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/edges',
        name: RouteName.Edges,
        meta: { title: 'Sites' },
        component: () => import('@/views/edges/edges.view.vue'),
    },
    {
        path: '/palette',
        name: RouteName.Palette,
        meta: { title: 'Palette' },
        component: () => import('@/views/palette/palette.view.vue'),
    },
    {
        path: '/',
        name: RouteName.Dimensions,
        meta: { title: 'Dimensions' },
        component: () => import('@/views/dimensions/dimensions.view.vue'),
    },
    {
        path: '/sinks',
        name: RouteName.Sinks,
        meta: { title: 'Sinks' },
        component: () => import('@/views/sinks/sinks.view.vue'),
    },
    {
        path: '/addons',
        name: RouteName.Addons,
        meta: { title: 'Addons' },
        component: () => import('@/views/addons/addons.view.vue'),
    },
    {
        path: '/result',
        name: RouteName.Result,
        meta: { title: 'Result' },
        component: () => import('@/views/result/result.view.vue'),
    },
]

export default function () {
    return createRouter({
        history: createWebHashHistory(),
        routes,
    })
}
