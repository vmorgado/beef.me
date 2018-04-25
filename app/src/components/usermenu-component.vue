<template>
    <b-card title="UserMenu"
        img-src="./assets/userunknown.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <p class="card-text">
            {{user}}
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
</template>
<script>
export default {
  name: 'user-menu-component',
  data () {
    return {
      user: 'Telhas é Noob'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
