import Home from "./pages/home.js";
import About from "./pages/about.js";
import Skills from "./pages/skills.js";
import Projects from "./pages/projects.js";
import Education from "./pages/education.js";
import Languages from "./pages/languages.js";

export default {
  homeRoute: function () {
    Home.render();
  },

  aboutRoute: function () {
    About.render();
  },

  skillsRoute: function () {
    Skills.render();
  },

  projectsRoute: function () {
    Projects.render();
  },

  educationRoute: function () {
    Education.render();
  },

  languagesRoute: function () {
    Languages.render();
  },
};
