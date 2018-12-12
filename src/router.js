import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Protected from "@/views/Protected";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, 
    {
      path:"/protected",
      name: "Protected",
      component: Protected
    }
  ]
});

export default router;