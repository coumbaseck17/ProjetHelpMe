import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../etudiant";
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Theme} from "../theme";

@Component({
  selector: 'app-details-etudiants',
  templateUrl: './details-etudiants.component.html',
  styleUrls: ['./details-etudiants.component.css']
})
export class DetailsEtudiantsComponent implements OnInit {

  //liste3 : Etudiant []=[];
  //liste3 : Etudiant []=[];
  etu!: Etudiant;
  listeVol: Theme []= [];
  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.getEtudiant(id).subscribe((data) => {this.etu = data})
    /*const p1 = new Etudiant();
    p1.nom = 'Nom 1';
    p1.prenom = 'Prenom 1';
    p1.id = 1;
    p1.ville = 'adr 1';
    p1.contact= '12345';
    p1.nbLike = 3;
    //p1.nbTheme = '27-03-2020';
    this.liste3.push(p1);*/
  }

}

