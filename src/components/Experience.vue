<template>
    <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">
            <experience-item 
            v-for="item in experienceList"
            v-bind:exp="item"
            v-bind:key="item.id"></experience-item>
        </div>
    </div>
</template>

<script>
import ExperienceItem from './Experience/ExperienceItem.vue'
export default {
    props: ['experienceList'],
    components: {
        ExperienceItem
    }
}
</script>

<style scoped>

</style>