<template>
    <b-navbar toggleable>
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <b-navbar-brand tag="h1" class="mb-0" :to="{name: 'Home'}">My Menu</b-navbar-brand>
      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name: 'My Recipes'}">My Recipes</b-nav-item>
          <b-nav-item :to="{name: 'My Menus'}">My Menus</b-nav-item>
          <b-nav-item :to="{name: 'Find Recipes'}">Find Recipes</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="isLoggedIn" class="ml-auto">
          <b-nav-item-dropdown :text="`Hello, ${username}!`" right>
            <b-dropdown-item :to="{name: 'Profile'}">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="triggerNetlifyIdentityAction('logout')">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto">
            <b-nav-item href="#" @click="triggerNetlifyIdentityAction('login')">Log In</b-nav-item>
            <b-nav-item href="#" @click="triggerNetlifyIdentityAction('signup')">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
	import netlifyIdentity from "netlify-identity-widget";
	import { mapGetters, mapActions } from "vuex";

	netlifyIdentity.init({
		APIUrl: "https://mymenu.mariesdiaz.com/.netlify/identity",
		logo: true
	});

  export default {
    data() {
      return {};
    },
    methods: {
      ...mapActions("user", {
        updateUser: "updateUser"
      }),
      triggerNetlifyIdentityAction(action) {
        if (action == "login" || action == "signup") {
          netlifyIdentity.open(action);
          netlifyIdentity.on(action, user => {
            netlifyIdentity.close();
            let currentUser = {
              username: user.user_metadata.full_name,
              email: user.email
            };
            this.updateUser({
              currentUser: currentUser
            });
            this.$router.push({ name: "My Menus" });
          });
        } else if (action == "logout") {
          this.updateUser({
            currentUser: null
          });
          netlifyIdentity.logout();
          this.$router.push({ name: "Home" });
        }
      }
    },
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "getUserStatus",
        user: "getUser"
      }),
      username() {
        return this.user ? this.user.username :", there!";
      }
    }
  }
</script>

<style>
nav { 
  background-color: #2ec79f;
  
}
a.nav-link, a.navbar-brand {
  color: #fbf6f7!important
}
</style>