<template>
   <div id="education">
        <h2 class="heading">Education</h2>
        <education-item 
        v-for="item in educationList"
        v-bind:education="item"
        v-bind:key="item.id"></education-item>
        <!-- End .education-block -->
    </div>
    <!-- End #education -->
</template>

<script>
  import EducationItem from './Education/EducationItem.vue'
  export default{
      props: ['educationList'],
      components: {
          EducationItem
      }
  }
</script>

<style scoped>

</style>