import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { ListerThemeComponent } from './lister-theme/lister-theme.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsEtudiantsComponent } from './details-etudiants/details-etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AjouterThemeComponent } from './ajouter-theme/ajouter-theme.component';
import { RetirerEtudiantComponent } from './retirer-etudiant/retirer-etudiant.component';
import { ListerEtudiantComponent } from './lister-etudiant/lister-etudiant.component';
import {FormsModule} from "@angular/forms";
import { RecommanderComponent } from './recommander/recommander.component';
import { ReferentsComponent } from './referents/referents.component';
import { ReglagesComponent } from './reglages/reglages.component';
import { AccueilComponent } from './accueil/accueil.component';
import {EliminerThemeComponent} from "./eliminer-theme/eliminer-theme.component";
import {HttpClientModule} from "@angular/common/http";
import {ApiHelpmeService} from "./api-helpme.service";
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationTheComponent } from './confirmation-the/confirmation-the.component';

const AppRoutes: Routes= [
  {path: 'ListeTheme' , component:ListerThemeComponent},
  {path: 'ListeTheme/DetailsTheme/:id' , component:DetailsThemeComponent},
  {path: 'ListeEtudiant' , component:ListerEtudiantComponent},
  {path: 'DetailsEtudiant/:id' , component:DetailsEtudiantsComponent},
  {path: 'AjouterEtudiant' , component:AjouterEtudiantComponent},
  {path: 'AjouterTheme' , component:AjouterThemeComponent},
  {path: 'ListeEtudiant/Recommander' , component:RecommanderComponent},
  {path: 'ListeTheme/DetailsTheme/:id/Referents/:id' , component:ReferentsComponent},
  {path: 'DetailsEtudiant/:id/Reglages/:id' , component:ReglagesComponent},
  {path: '' , component:AccueilComponent },
  {path: 'Accueil' , component:AccueilComponent },
  /*{path: 'ListeTheme/DetailsTheme/:id/EliminerTheme/:id' , component:EliminerThemeComponent},*/
  {path: 'AjouterEtudiant/Confirmation' , component:ConfirmationComponent },
  {path: 'AjouterTheme/Confirmation' , component:ConfirmationTheComponent },
  {path: 'DetailsEtudiant/:id/Reglages/:id/EliminerEtu/:id' , component:RetirerEtudiantComponent },
  {path: 'DetailsEtudiant/:id/Like/:id' , component:RecommanderComponent },
  {path: 'DetailsEtudiant/:id/Dislike/:id' , component:RecommanderComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListerThemeComponent,
    DetailsThemeComponent,
    DetailsEtudiantsComponent,
    AjouterEtudiantComponent,
    AjouterThemeComponent,
    RetirerEtudiantComponent,
    ListerEtudiantComponent,
    RecommanderComponent,
    ReferentsComponent,
    ReglagesComponent,
    AccueilComponent,
    EliminerThemeComponent,
    ConfirmationComponent,
    ConfirmationTheComponent
  ],
  imports: [
    BrowserModule, NgbModule, RouterModule.forRoot(AppRoutes), FormsModule, HttpClientModule
  ],
  providers: [ApiHelpmeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
