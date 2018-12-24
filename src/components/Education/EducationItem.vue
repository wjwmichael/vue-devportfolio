<template>
  <div class="education-block">
      <h3>{{education.place}}</h3>
      <span class="education-date">{{education.date}}</span>
      <h4>{{education.degree}}</h4>
      <p>
          {{education.description}}
      </p>
  </div>
</template>

<script>
  export default{
    props: ['education'],
  }
</script>

<style scoped>

</style>