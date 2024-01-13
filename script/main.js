//on met les fonctions pour gérer les lignes du tableau
const addEntries=()=>{
    //executé lors du chargement de la page pour créer les lignes du tableau
    //lit le fichier où la liste d'école est rangée et créé les lignes
}

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