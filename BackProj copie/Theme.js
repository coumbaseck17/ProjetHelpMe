const Etudiant = require('./Etudiant');
module.exports=class Theme {

constructor(num,titre,description,motscles,nomcreateur) {
    this._num=num;
    this._titre=titre;
    this._description=description;
    this._motscles=motscles;
    this._date=new Date();
    this._nomcreateur=nomcreateur;
    this._nbRef=0;
    this._listeReferents=[];

}
    get num(){
     return this._num;
    };

    get titre(){
        return this._titre;
    };

    get description(){
        return this._description;
    };

    get motscles(){
        return this._motscles;
    };

    get date(){
        return this._date;
    };

    get nomcreateur(){
        return this._nomcreateur;
    };

    get nbRef(){
        return this._nbRef;
    };

    set nbRef(nb){
        return this._nbRef=nb;
    }

    get listeReferents(){
        return this._listeReferents;
    }




}