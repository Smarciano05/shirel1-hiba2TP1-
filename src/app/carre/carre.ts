import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  styleUrl: './carre.css',
  templateUrl: './carre.html',
})
export class Carre {
  @Output() couleurChoisie: EventEmitter<string> = new EventEmitter();

  public cliquerCouleur(couleur: string): void {
    this.couleurChoisie.emit(couleur);
  }
}
