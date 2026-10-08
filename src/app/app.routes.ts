import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Programmes } from './programmes/programmes';
import { Resources } from './resources/resources';
import { Events } from './events/events';
import { EventDetails } from './event-details/event-details';
import { Media } from './media/media';
import { Opportunities } from './opportunities/opportunities';
import { Community } from './community/community';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Home, title: 'YRA | Home' },
  { path: 'about', component: About, title: 'YRA | About' },
  { path: 'programmes', component: Programmes, title: 'YRA | Programmes' },
  { path: 'resources', component: Resources, title: 'YRA | Resources' },
  { path: 'events', component: Events, title: 'YRA | Events' },
  { path: 'events/:id', component: EventDetails, title: 'YRA | Event Details' },
  { path: 'media', component: Media, title: 'YRA | Media' },
  { path: 'opportunities', component: Opportunities, title: 'YRA | Opportunities' },
  { path: 'community', component: Community, title: 'YRA | Community' },
  { path: 'login', component: Login, title: 'YRA | Login' },
  { path: '**', redirectTo: '' },
];