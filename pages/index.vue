<template>
  <div>
      <nuxt-link to="/api" exact>нажать в новой вкладке</nuxt-link>
      <div>произойдёт переход на http://localhost:3000/api со строкой "Hello world"</div>

  </div>
</template>

<script>
export default {
  asyncData(context) {},
  middleware: "world",
};
</script>
