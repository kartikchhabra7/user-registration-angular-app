import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteManagerComponent } from './container/note-manager/note-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
