<template>
    <b-navbar variant="info" type="dark" toggleable>
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <b-navbar-brand tag="h1" class="mb-0">My Menu</b-navbar-brand>
      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
          <b-nav-item :to="{name: 'Protected'}">Protected</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  }
}
</script>