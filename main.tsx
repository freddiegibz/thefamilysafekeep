import {createRoot} from 'react-dom/client';
import './app/globals.css';
import Home from './app/page';
import Oto1 from './app/oto1/page';
import Oto2 from './app/oto2/page';
import ThankYou from './app/thank-you/page';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const routes = {
  '/': {Page: Home, title: 'The Family Safekeep | Give your family a place to start'},
  '/oto1': {Page: Oto1, title: 'The No-Guessing Final Wishes Pack | The Family Safekeep'},
  '/oto2': {Page: Oto2, title: 'Your Safekeep, Sorted | The Family Safekeep'},
  '/thank-you': {Page: ThankYou, title: 'Thank You | The Family Safekeep'},
};
const route = routes[path as keyof typeof routes];
if (route) {
  document.title = route.title;
  if (path === '/thank-you') {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
  }
}
createRoot(document.getElementById('root')!).render(route ? <route.Page /> : <main><h1>Page not found</h1><a href="/">Back to home</a></main>);
