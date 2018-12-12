<template>
	<div>
		<h1>This is the homepage?</h1>
		<h2>{{text}}</h2>	
		<div v-if="isLoggedIn">
      <p>Hello {{ username }}</p>
      <p>
        <button @click="triggerNetlifyIdentityAction('logout')">Log Out</button>
      </p>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <p>
        <button @click="triggerNetlifyIdentityAction('login')">Log In</button>
        <button @click="triggerNetlifyIdentityAction('signup')">Sign Up</button>
      </p>
    </div>
	</div>
</template>

<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
	import netlifyIdentity from "netlify-identity-widget";

	import { mapGetters, mapActions } from "vuex";

	netlifyIdentity.init({
		APIUrl: "https://mymenu.mariesdiaz.com/.netlify/identity",
		logo: true
	});

	export default {
		data() {
			return {
				text: "This is a sentence?"
			};
		},
		computed: {
			...mapGetters("user", {
				isLoggedIn: "getUserStatus",
				user: "getUser"
			}),
			username() {
				return this.user ? this.user.username :", there!";
			}
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
          });
        } else if (action == "logout") {
          this.updateUser({
            currentUser: null
          });
          netlifyIdentity.logout();
          this.$router.push({ name: "Home" });
        }
      }
    }
	}
</script>