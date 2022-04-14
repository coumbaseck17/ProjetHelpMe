import { Component, OnInit } from '@angular/core';
import {ApiHelpmeService} from "../api-helpme.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-retirer-etudiant',
  templateUrl: './retirer-etudiant.component.html',
  styleUrls: ['./retirer-etudiant.component.css']
})
export class RetirerEtudiantComponent implements OnInit {

  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.eliminerEtudiant(id);
  }

}
