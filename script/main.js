let cache =datas;
const keys=Array("name","type","lien","date");
//on met les fonctions pour gérer les lignes du tableau
const addEntries=(tabToUse)=>{
    //executé lors du chargement de la page pour créer les lignes du tableau
    //lit le fichier où la liste d'école est rangée et créé les lignes
    const tableau= document.getElementById("tabledatas");
    for(let i=0;i<tabToUse.length;i++){
        let row = tableau.insertRow();
        for(let j=0;j<keys.length;j++){
            let cell = row.insertCell();
            if(keys[j]!="date"){
                cell.append(tabToUse[i][keys[j]]);
            }
            else{
                let preFormat ="";
                if(tabToUse[i][keys[j]].getDate()<10){
                    preFormat+="0";
                }
                preFormat+=tabToUse[i][keys[j]].getDate() +'/';
                if(tabToUse[i][keys[j]].getMonth()<10){
                    preFormat+="0";
                }
                preFormat+=tabToUse[i][keys[j]].getMonth();
                cell.append(preFormat);
            }
        }
    }
}

addEntries(datas);

const sortEntries=(sortingType)=>{
    if(sortingType=="alphabetique"){
        //range les écoles par ordre alphabétique
        cache.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        reloadEntries(cache);
    }
    else if(sortingType=="parDossier"){
        //n'affiche que les écoles par dossier
        let tempTab=Array();
        for(let i=0;i<datas.length;i++){
            if(datas[i].type=="dossier"){
                tempTab.push(datas[i]);
            }
        }
        reloadEntries(tempTab);
    }
    else if(sortingType=="parConcours"){
        //n'affiche que les écoles par concours
        let tempTab=Array();
        for(let i=0;i<datas.length;i++){
            if(datas[i].type=="concours"){
                tempTab.push(datas[i]);
            }
        }
        reloadEntries(tempTab);
    }
    else if(sortingType=="parDateLimite"){
        //range les écoles par date limite d'inscription
        cache.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
        reloadEntries(cache);
    }
    else{
        alert("Fonction non implémentée");
    }
}

const deleteEntries=()=>{
    const tableau= document.getElementById("tabledatas");
    for(let i =0;i<=tableau.rows.length;i++){
        tableau.deleteRow(0);
    }
}

const resetDatas=()=>{
    cache=datas;
    reloadEntries(datas);
}

const reloadEntries=(tabToUse)=>{
    //réaffiche toutes les écoles
    deleteEntries();
    addEntries(tabToUse);
    cache = tabToUse;
}

const buttonAlphabetique=document.getElementById("alphabetique");
const buttonDossier=document.getElementById("parDossier");
const buttonConcours=document.getElementById("parConcours");
const buttonDateLimite=document.getElementById("dateLimite");
const buttonReset=document.getElementById("reset");

buttonAlphabetique.addEventListener("click", function(){ if(loaded==true)sortEntries("alphabetique")});
buttonDossier.addEventListener("click",function(){ if(loaded==true)sortEntries("parDossier")});
buttonConcours.addEventListener("click",function(){ if(loaded==true)sortEntries("parConcours")});
buttonDateLimite.addEventListener("click",function(){ if(loaded==true)sortEntries("parDateLimite")});
buttonReset.addEventListener("click",function(){ if(loaded==true)resetDatas()});

const loaded = true;