<template>
  <div>
    <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Current Menu" active>
        Current Menu
        <template>
          <b-table striped hover :items="items"></b-table>
       </template>
       </b-tab>
        <b-tab title="Past Menu Date">
         Tab Contents 2
         <template>
            <b-table striped hover :items="items"></b-table>
         </template>
        </b-tab>
        <b-tab title="Past Menu Date 2">
          Tab Contents 3
          <template>
            <b-table striped hover :items="items"></b-table>
          </template>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Protected",
  data () {
    return {
      items: [
        { Meal: "Breakfast", Sunday: "-", Monday: "-", Tuesday: "-", Wedneday: "-", Thruday: "-", Friday: "-", Saturday: "-"},
        { Meal: "Lunch", Sunday: "-", Monday: "-", Tuesday: "-", Wedneday: "-", Thruday: "-", Friday: "-", Saturday: "-"},
        { Meal: "Dinner", Sunday: "-", Monday: "-", Tuesday: "-", Wedneday: "-", Thruday: "-", Friday: "-", Saturday: "-"},
        { Meal: "Snack", Sunday: "-", Monday: "-", Tuesday: "-", Wedneday: "-", Thruday: "-", Friday: "-", Saturday: "-"},
        { Meal: "Dessert", Sunday: "-", Monday: "-", Tuesday: "-", Wedneday: "-", Thruday: "-", Friday: "-", Saturday: "-"},
      ]
    }
  },
}
</script>