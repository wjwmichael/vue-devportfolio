<template>
    <div class="vtimeline-point">
        <div class="vtimeline-icon">
            <i class="fa fa-map-marker">
            </i>
        </div>
        <div class="vtimeline-block">
            <span class="vtimeline-date">{{exp.time}}</span>
            <div :data-date="exp.time" class="vtimeline-content">
                <h3>{{exp.empName}}</h3>
                <h4>{{exp.title}}</h4>
                <p>
                    {{exp.description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['exp'],
  }
</script>

<style scoped>

</style>