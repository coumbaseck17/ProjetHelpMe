import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "./etudiant";
import {catchError, Observable} from "rxjs";
import {Theme} from "./theme";

@Injectable({
  providedIn: 'root'
})
export class ApiHelpmeService {

  private url = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  public recupererListeEtu(): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(this.url+'/etudiant');
  }

  public getEtudiant(id :number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(this.url+'/etudiant/'+id);
  }

  public ajouterEtudiant(etu: Etudiant){
    this.httpClient.post<Etudiant>(this.url+'/etudiant', etu)
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur ajouter')}
      )
  }

  public recupererListeThe(): Observable<Theme[]>{
    return this.httpClient.get<Theme[]>(this.url+'/theme');
  }

  public getTheme(id :number): Observable<Theme>{
    return this.httpClient.get<Theme>(this.url+'/theme/'+id);
  }

  public ajouterTheme(the: Theme){
    this.httpClient.post<Theme>(this.url+'/theme', the)
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur ajouter')}
      )
  }

  public eliminerTheme(id: number){
    this.httpClient.delete<Theme>(this.url+'/theme/'+id)
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur delete')}
      )
  }

  public eliminerEtudiant(id: number){
    this.httpClient.delete<Etudiant>(this.url+'/etudiant/'+id)
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur delete')}
      )
  }

  /*public themeConnu(id: number,num: number){
    this.httpClient.put<Etudiant>(this.url+'/etudiant/'+id,{ 'num':num })
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur put')}
      )
  }

  public recupererListeVol(id: number): Observable<Theme[]>{
    return this.httpClient.get<Theme[]>(this.url+'/volontariat/'+id);
  }*/

  public reccomander(id:number,num:number){
    this.httpClient.put<Theme>(this.url+'/like',{ '_id':id,'_num':num })
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur put')}
      )
  }

  public deconseiller(id:number,num:number){
    this.httpClient.put<Theme>(this.url+'/dislike',{ '_id':id,'_num':num })
      .subscribe(
        (response) => {console.log(response);}
        ,(error) => {console.log('Erreur put')}
      )
  }






}
