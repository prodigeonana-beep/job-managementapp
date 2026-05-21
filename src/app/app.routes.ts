import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./job-seeker/job-seeker').then((m) => m.JobSeeker) },
  { path: 'jobs', loadComponent: () => import('./pages/jobs/jobs.page').then((m) => m.JobsPage) },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage) },
  { path: 'edit-profile', loadComponent: () => import('./pages/edit-profile/edit-profile.page').then((m) => m.EditProfilePage) },
  { path: 'summary', loadComponent: () => import('./pages/summary/summary.page').then((m) => m.SummaryPage) },
  { path: 'messages', loadComponent: () => import('./pages/messages/messages.page').then((m) => m.MessagesPage) },
  { path: '**', redirectTo: '' }
];
