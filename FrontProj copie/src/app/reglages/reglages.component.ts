import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { Theme } from '../theme';
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reglages',
  templateUrl: './reglages.component.html',
  styleUrls: ['./reglages.component.css']
})
export class ReglagesComponent implements OnInit {
  etu!: Etudiant;

  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.getEtudiant(id).subscribe((data) => {this.etu = data});
  }


}
