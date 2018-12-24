<template>
    <div>
        <div id="mobile-menu-open" 
        class="shadow-large"
        v-on:click="showMobileMenu = true">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <!-- End #mobile-menu-toggle -->
        <header
        v-bind:class="{ active: showMobileMenu }"
        >
            <div id="mobile-menu-close"
            v-on:click="showMobileMenu = false"
            >
                <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul id="menu" class="shadow">
                <li>
                    <a href="#about" v-scroll-to="'#about'" v-on:click="showMobileMenu = false">About</a>
                </li>
                <li>
                    <a href="#experience" v-scroll-to="'#experience'" v-on:click="showMobileMenu = false">Experience</a>
                </li>
                <li>
                    <a href="#education" v-scroll-to="'#education'" v-on:click="showMobileMenu = false">Education</a>
                </li>
                <li>
                    <a href="#projects" v-scroll-to="'#projects'" v-on:click="showMobileMenu = false">Projects</a>
                </li>
                <li>
                    <a href="#skills" v-scroll-to="'#skills'" v-on:click="showMobileMenu = false">Skills</a>
                </li>
                <li>
                    <a href="#contact" v-scroll-to="'#contact'" v-on:click="showMobileMenu = false">Contact</a>
                </li>
            </ul>
        </header>
        <!-- End header -->
    </div>
</template>

<script>
  export default {
    props: ['showMobileMenu'],
  }
</script>

<style scoped>

</style>