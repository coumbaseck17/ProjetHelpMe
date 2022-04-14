import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {ApiHelpmeService} from "../api-helpme.service";
import {Etudiant} from "../etudiant";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recommander',
  templateUrl: './recommander.component.html',
  styleUrls: ['./recommander.component.css']
})
export class RecommanderComponent implements OnInit {
  etu!: Etudiant;
  liste: Theme [] = [];
  nb!: number;
  nb2!:number;

  constructor(private apiHelpmeService: ApiHelpmeService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routeactive.snapshot.params['id'];
    this.apiHelpmeService.getEtudiant(id).subscribe((data) => {this.etu = data})
    this.apiHelpmeService.recupererListeThe().subscribe((data)=>{this.liste = data});
  }

  like(id: number, num: number){
    this.apiHelpmeService.reccomander(id,num);
    this.ngOnInit();
  }

  dislike(id: number, num: number){
    this.apiHelpmeService.deconseiller(id,num);
    this.ngOnInit();
  }


}
