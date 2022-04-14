const Theme =require ('./Theme');
module.exports = class Etudiant {
    constructor (id,nom,prenom,contact,ville){
        this._id =id;
        this._nom = nom;
        this._prenom= prenom;
        this._contact= contact;
        this._ville=ville
        this._nbLike= 0;
        //this._nbThemes=0;
        //this._volontariat=[];
    }

    get id() {
        return this._id;
    };

    get nom() {
        return this._nom;
    };

    get prenom(){
        return this._prenom;
    };

    get contact(){
        return this.contact;
    };

    get nbLike(){
        return this._nbLike;
    };

    get ville(){
        return this._ville
    };

    get nbLike(){
        return this._nbLike;
    };

    set nbLike(nb){
        return this._nbLike=nb;
    }

    get nbThemes(){
        return this._nbThemes;
    };

    set nbThemes(nb){
        return this._nbThemes=nb;
    }

   /* get volontariat(){
        return this._volontariat;
    };*/
}