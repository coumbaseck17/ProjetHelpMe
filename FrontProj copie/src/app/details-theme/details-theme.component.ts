import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent implements OnInit {

  theme!: Theme;
  liste: Theme [] = [];

  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.getTheme(id).subscribe((data) => {this.theme = data})
  }

  eliminer(){
    this.apiHelpmeService.eliminerTheme(this.theme._num);

  }
}
