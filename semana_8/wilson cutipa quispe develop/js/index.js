'use strict';
// import { fetchReadElliotGaramendi } from './services/fetchApi.js';
import header from './header.js';
// import profile from './profile.js';
// import experiences from './experiences.js';
// import projects from './projects.js';
// import skills from './skills.js';
// import footer from './footer.js';

const documentReady = async () => {
  const elliotgaramendiData = await fetchReadElliotGaramendi();
  header();
  const fetchApi =async() =>{
    console.log('inicio fetch');
    const response = await Response.json();
    console.log(data);
    console.log('inicio');
    fetchApi();
    console.log('fin');
      
  }
  // profile(elliotgaramendiData);
  // experiences(elliotgaramendiData);
  // projects(elliotgaramendiData);
  // skills(elliotgaramendiData);
  // footer(elliotgaramendiData);
};

document.addEventListener('DOMContentLoaded', documentReady);