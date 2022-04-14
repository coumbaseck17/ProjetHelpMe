import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {Etudiant} from "../etudiant";
import {ApiHelpmeService} from "../api-helpme.service";

@Component({
  selector: 'app-lister-etudiant',
  templateUrl: './lister-etudiant.component.html',
  styleUrls: ['./lister-etudiant.component.css']
})
export class ListerEtudiantComponent implements OnInit {

  liste2: Etudiant []= [];

  constructor(private apiHelpmeService: ApiHelpmeService) { }

  ngOnInit(): void {
    this.apiHelpmeService.recupererListeEtu().subscribe((data) => {this.liste2 = data});
    /*
    const p1 = new Etudiant();
    p1.nom = 'Nom 1';
    p1.prenom = 'Prenom 1';
    p1.id = 1;
    p1.ville = 'adr 1';
    p1.contact= '12345';
    p1.nbLike = 3;
    //p1.nbTheme = '27-03-2020';
    this.liste2.push(p1);
    const p2 = new Etudiant();
    p2.nom = 'Nom 2';
    p2.prenom = 'Prenom 2';
    p2.id = 2;
    p2.ville = 'adr 2';
    p2.contact = '31000';
    p2.nbLike =9;
    // @ts-ignore
    //p2.datemiseajour = '27-03-2020';
    this.liste2.push(p2);
*/
  }

}
