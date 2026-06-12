import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  imports: [],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css',
})
export class MyProfile {
  skills = [
    '.NET 8',
    'Angular',
    'TypeScript',
    'SQL Server',
    'Docker',
    'Azure'
  ];
}
