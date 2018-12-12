<template>
	<div>
		<h1>This is the homepage?</h1>
		<h2>{{text}}</h2>
		<b-alert 	:show="dismissCountDown"
							dismissible
							variant="warning"
							@dismissed="dismissCountDown=0"
							@dismiss-count-down="countDownChanged">
      <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
    </b-alert>
    <b-btn @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-btn>
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
				dismissSecs: 10,
				dismissCountDown: 0,
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
			},
			countDownChanged (dismissCountDown) {
				this.dismissCountDown = dismissCountDown
			},
			showAlert () {
				this.dismissCountDown = this.dismissSecs
			}
		}
	}
</script>