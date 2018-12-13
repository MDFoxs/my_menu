import Vue from "vue"
import Vuex from "vuex"
import user from "./modules/user"
import recipe from "./modules/recipe"

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        user,
        recipe
    }
});