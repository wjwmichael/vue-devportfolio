<template>
  <div id="app">
    <div 
      v-bind:class="{ active: !showMobileMenu }"
      >
      <Header v-bind:show-mobile-menu="showMobileMenu"></Header>
      <Lead></Lead>
      <About></About>
      <Experience v-bind:experience-list="experienceList"></Experience>
      <Education v-bind:education-list="educationList"></Education>
      <Projects></Projects>
      <Skill></Skill>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
const Header = () => import('@/components/Header');
const About = () => import('@/components/About');
const Contact = () => import('@/components/Contact');
const Education = () => import('@/components/Education');
const Experience = () => import('@/components/Experience');
const Projects = () => import('@/components/Projects');
const Skill = () => import('@/components/Skill');
const Footer = () => import('@/components/Footer');
const Lead = () => import('@/components/Lead');
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);
export default {
  name: 'App',
  components: {
    Header,
    Lead,
    About,
    Contact,
    Education,
    Experience,
    Projects,
    Skill,
    Footer
  },
  data() {
    return {
      showMobileMenu: false,
      educationList: [
          { id: 0, place: 'Rice University', date: 'Sept 2016 - Sept 2017', degree: 'Master of Computational Science and Engineering', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.'},
          { id: 1, place: 'Rice University', date: 'Sept 2016 - Sept 2017', degree: 'Master of Computational Science and Engineering', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.'},
      ],
      experienceList: [
          { id: 0, empName: "IBM", title: "Software Engineer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.", time: "Sept 2016 - Sept 2017"},
          { id: 1, empName: "IBM", title: "Software Engineer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.", time: "Sept 2016 - Sept 2017"},
      ],
      projectList: [

      ]
    };
  },
}



</script>

<style>

</style>