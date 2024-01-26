import {CalendarPage, TasksPage, TimerPage} from "@/pages";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes:  RouteRecordRaw[] = [
    {
        path: "/tasks",
        name: "Tasks",
        component: TasksPage,
    }, {
        path: "/timer",
        name: "Timer",
        component: TimerPage,
    }, {
        path: "/calendar",
        name: "Calendar",
        component: CalendarPage,
    },
    {
        path: "/",
        name: "Default",
        redirect: '/tasks'
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});
