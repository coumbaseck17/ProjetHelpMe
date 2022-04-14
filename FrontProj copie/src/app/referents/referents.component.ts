import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../etudiant";
import {Theme} from "../theme";
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-referents',
  templateUrl: './referents.component.html',
  styleUrls: ['./referents.component.css']
})
export class ReferentsComponent implements OnInit {

  theme!: Theme;
  liste!: Etudiant [];
  nomRecherche!: string;


  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.getTheme(id).subscribe((data) => {this.theme = data})
  }

  trier(){
    this.liste=this.theme._listeReferents;
    this.liste.sort(function(a,b){
      if(a._prenom < b._prenom){
        return -1;}
      return 1;
    });
  }

  recherche2() {
    if(this.nomRecherche!=""){
      this.theme._listeReferents= this.theme._listeReferents.filter(res => {
        return res._prenom.toLocaleLowerCase().match(this.nomRecherche.toLocaleLowerCase());
      })
    }
    else {
      this.ngOnInit();
    }
  }
}
