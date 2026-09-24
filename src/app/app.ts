import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shirel1hiba2TP1-');
  couleurClique = "white";
  cliquerCouleur(couleur:string){
    this.couleurClique=couleur;
  }
}


