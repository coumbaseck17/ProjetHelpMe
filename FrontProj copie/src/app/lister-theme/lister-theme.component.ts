import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {Router} from "@angular/router";
import {ApiHelpmeService} from "../api-helpme.service";

@Component({
  selector: 'app-lister-theme',
  templateUrl: './lister-theme.component.html',
  styleUrls: ['./lister-theme.component.css']
})
export class ListerThemeComponent implements OnInit {

  liste: Theme [] = [];
  a!: Theme;
  b!: Theme;
  titreRecherche!: string;

  constructor(private apiHelpmeService: ApiHelpmeService) { }

  ngOnInit(): void {
    this.apiHelpmeService.recupererListeThe().subscribe((data)=>{this.liste = data});

  }

  trier(){
    this.liste.sort(function(a,b){
      if(a._titre.toLocaleLowerCase() < b._titre.toLocaleLowerCase()){
        return -1;}
      return 1;
    });
  }

  recherche() {
    if(this.titreRecherche!=""){
      this.liste= this.liste.filter(res => {
        return res._titre.toLocaleLowerCase().match(this.titreRecherche.toLocaleLowerCase());
      })
    }
    else {
      this.ngOnInit();
    }
  }



}
