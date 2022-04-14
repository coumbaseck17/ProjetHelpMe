import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {Etudiant} from "../etudiant";
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-theme',
  templateUrl: './ajouter-theme.component.html',
  styleUrls: ['./ajouter-theme.component.css']
})
export class AjouterThemeComponent implements OnInit {
  theme! : Theme;
  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.theme = new Theme();
  }

  valider(){
    this.apiHelpmeService.ajouterTheme(this.theme);
  }

}
