const Etudiant = require('./Etudiant');
const Theme =require ('./Theme');
module.exports = class Site {
    constructor() {
        this.listeEtudiants = [];
        this.nextId = 0;
        this.listeThemes=[];
        this.nextNum=0;

    }

    ajouterTheme(titre,description,motscles,nomcreateur) {
        const num= this.nextNum++;
        this.listeThemes.push(new Theme(num,titre,description,motscles,nomcreateur));

    };

    retirerTheme(num){
        for(let i=0; i<this.listeThemes.length; i++){
            if(this.listeThemes[i].num==num)
                this.listeThemes.splice(i,1);
        }
    };

    afficherTheme(num){
        for(let i=0; i<this.listeThemes.length; i++){
            if(this.listeThemes[i].num===num)
                return this.listeThemes[i];
        }
    }


    ajouterProfil(nom,prenom,contact,ville) {
        const id = this.nextId++;
        this.listeEtudiants[id] = new Etudiant(id,nom,prenom,contact,ville);
        //console.log(listeEtudiants);
        return this.id;
    };

    retirerProfil (id){
        for(let i=0; i<this.listeEtudiants.length; i++){
            if(this.listeEtudiants[i].id==id)
                this.listeEtudiants.splice(i,1);
        }
    };

    ajouterReferent(id,num){
        for(let i=0; i<this.listeEtudiants.length; i++){
            if(this.listeEtudiants[i].id===id) {
                for (let j = 0; j < this.listeThemes.length; j++) {
                    if (this.listeThemes[j].num === num) {
                        this.listeThemes[j].listeReferents[this.listeThemes[j].nbRef]=this.listeEtudiants[i];
                        this.listeThemes[j].nbRef++;
                    }
                }
            }
        }
      
    };

    retirerReferent(id,num) {
        for (let i = 0; i < this.listeThemes.length; i++) {
            if (this.listeThemes[i].num === num) {
                for (let j = 0; j < this.listeEtudiants.length; j++) {
                    if (this.listeThemes[i].listeReferents[j].id === id) {
                        this.listeThemes[i].listeReferents.splice(j, 1);
                    }
                }
            }
        }
    }

    //id de l'etudiant qu'on choisit pour qu'il soit referent
    like (id,num){
        if (typeof this.listeEtudiants[id] === 'undefined')
            return 0;
        else {
            for (let i = 0; i < this.listeEtudiants.length; i++) {
                if (this.listeEtudiants[i].id === id) {
                    for (let j = 0; j < this.listeThemes.length; j++) {
                        if (this.listeThemes[j].num === num) {
                            this.listeEtudiants[i].nbLike++;
                            for(let y=0; y<this.listeThemes[j].listeReferents.length; y++) {
                                if (this.listeThemes[j].listeReferents[y] == this.listeEtudiants[i])
                                    return 0
                            }
                            this.ajouterReferent(id, num);
                        }
                    }
                }
            }
        }
        return 0;
    };

    dislike(id,num){
        if (typeof this.listeEtudiants[id] === 'undefined')
            return 0;
        else{
            for (let i = 0; i < this.listeEtudiants.length; i++) {
                if (this.listeEtudiants[i].id === id) {
                    for (let j = 0; j < this.listeThemes.length; j++) {
                        if (this.listeThemes[j].num === num) {
                            if(this.listeEtudiants[i].nbLike<=0)
                                this.listeEtudiants[i].nbLike=0;
                            this.listeEtudiants[i].nbLike--;
                            if (this.listeEtudiants[i].nbLike===0)
                                this.retirerReferent(i,j);
                        }
                    }
                }
            }
        }

    }

}
