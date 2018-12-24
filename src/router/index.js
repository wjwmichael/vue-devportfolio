import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Header = () => import('@/components/Header');
const About = () => import('@/components/About');
const Contact = () => import('@/components/Contact');
const Education = () => import('@/components/Education');
const Experience = () => import('@/components/Experience');
const Projects = () => import('@/components/Projects');
const Skill = () => import('@/components/Skill');
const Footer = () => import('@/components/Footer');
const Lead = () => import('@/components/Lead');

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        Header: Header,
        Lead: Lead,
        About: About,
        Contact: Contact,
        Education: Education,
        Experience: Experience,
        Projects: Projects,
        Skill: Skill,
        Footer: Footer
      }
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Lead',
      name: 'Lead',
      component: Lead
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
  ]
})