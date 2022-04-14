import {Etudiant} from "./etudiant";

export class Theme {
  _num!: number;
  _titre!: string;
  _description!: string;
  _motscles!: string;
  _date!: Date;
  _nomcreateur!: string;
  _nbRef!:number;
  _listeReferents!: Etudiant[];

}
