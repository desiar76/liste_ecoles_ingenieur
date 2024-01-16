let datas = Array({name:"ecole1",type:"par dossier", lien:"insert link",date:"date"},{name:"ecole2",type:"par concours", lien:"insert link",date:"date"});
const keys=Array("name","type","lien","date");
//on met les fonctions pour gérer les lignes du tableau
const addEntries=()=>{
    //executé lors du chargement de la page pour créer les lignes du tableau
    //lit le fichier où la liste d'école est rangée et créé les lignes
    const tableau= document.getElementById("tabledatas");
    for(let i=0;i<datas.length;i++){
        let row = tableau.insertRow();
        for(let j=0;j<keys.length;j++){
            let cell = row.insertCell();
            cell.append(datas[i][keys[j]]);
        }
    }
}

addEntries();

const sortEntries=(sortingType)=>{
    if(sortingType=="alphabetique"){
        //range les écoles par ordre alphabétique
    }
    else if(sortingType=="parDossier"){
        //n'affiche que les écoles par dossier
    }
    else if(sortingType=="parConcours"){
        //n'affiche que les écoles par concours
    }
    else if(sortingType=="parDateLimite"){
        //range les écoles par date limite d'inscription
    }
    else if(sortingType=="reset"){
        resetSorting();
    }
    else{
        alert("Fonction non implémentée");
    }
}

const resetSorting=()=>{
    //réaffiche toutes les écoles par ordre alphabétique
}