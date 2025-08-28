import './style.css'


const navIndex = `
  <ul id="nav-index">
    <li><a href="#about" id="link-about">About</a></li>
    <li><a href="#contact" id="link-contact">Contact</a></li>
    <li><a href="#horse" id="link-horse">Horse</a></li>
  </ul>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="main-content"></div>
`;


import aboutPage from './pages/about';
import contactPage from './pages/contact';
import horsePage from './pages/horse';
import { generateHorse } from './generators/horse';

function renderPage(page: string) {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;
  if (!page) {
    // Home page: index at top
    mainContent.innerHTML = `
      <h1>Home Page</h1>
      ${navIndex}
      <div id="page-content"></div>
    `;
  } else {
    // Other pages: index at bottom
    mainContent.innerHTML = `
      <div id="page-content"></div>
      <div style="margin-top:2em;">${navIndex}</div>
    `;
  }
  const content = document.getElementById('page-content');
  if (!content) return;
  if (page === 'about') {
    content.innerHTML = aboutPage;
  } else if (page === 'contact') {
    content.innerHTML = contactPage;
  } else if (page === 'horse') {
    content.innerHTML = horsePage;
    const btn = document.getElementById('generate-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const result = document.getElementById('horse-result');
        if (result) {
          const horse = generateHorse();
          if (horse instanceof Promise) {
            horse.then(h => result.textContent = h);
          } else {
            result.textContent = horse;
          }
        }
      });
    }
  } else if (!page) {
    // already handled above
  } else {
    content.innerHTML = '<p>Select a page above.</p>';
  }
}

function handleHashChange() {
  const page = location.hash.replace('#', '');
  renderPage(page);
}

window.addEventListener('hashchange', handleHashChange);
handleHashChange();
