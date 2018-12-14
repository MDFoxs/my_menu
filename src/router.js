import Vue from "vue";
import swal from "sweetalert2";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "@/views/Home";
import MyMenus from "@/views/MyMenus";
import MyRecipes from "@/views/MyRecipes";
import FindRecipes from "@/views/FindRecipes";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, 
    {
      path:"/myrecipes",
      name: "My Recipes",
      meta: { requiresAuth: true },
      component: MyRecipes
    },
    {
      path:"/mymenus",
      name: "My Menus",
      meta: { requiresAuth: true },
      component: MyMenus
    },
    {
      path:"/findrecipes",
      name: "Find Recipes",
      meta: { requiresAuth: true },
      component: FindRecipes
    },
    {
      path: "/profile",
      name: "Profile",
      meta: { requiresAuth: true },
      component: Profile
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUserExists = store.getters["user/getUserStatus"];
  if (to.matched.some(record => record.meta.requiresAuth) && !currentUserExists) {
    swal({
      title: "Error!",
      text: "Please log in or sign up!",
      type: "error",
      allowOutsideClick: false,
      confirmButtonText: "All Right"
    });
    return next({ name: "Home" });
  } else {
    return next();
  }
});

export default router;