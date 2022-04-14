import { Component, OnInit } from '@angular/core';
import {ListerEtudiantComponent} from "../lister-etudiant/lister-etudiant.component";
import {Etudiant} from "../etudiant";
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  etudiant!: Etudiant;

  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.etudiant = new Etudiant();
  }

  valider(){
    this.apiHelpmeService.ajouterEtudiant(this.etudiant);
  }

}
