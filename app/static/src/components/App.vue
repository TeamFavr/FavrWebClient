// app.vue
<style>
  .red {
    color: #444;
  }
</style>

<template>
  <p class="red">{{msg}}</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
