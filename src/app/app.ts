import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Programmes', path: '/programmes' },
    { label: 'Resources', path: '/resources' },
    { label: 'Events', path: '/events' },
    { label: 'Media', path: '/media' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'Community', path: '/community' },
  ];
}