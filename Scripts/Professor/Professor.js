import ListClasses from "./list_classes/Classes_container.js";
import { loadData } from "../utils.js";
import Setting from "./profile/Setting.js";

let root = document.getElementById('root');

let header__title = document.getElementById('header-title');
let header__title__details = document.getElementById('header-title-details');
let today__date = document.getElementById('today-date');
let prof__name = document.getElementById('prof-name');
let prof__image = document.getElementById('prof-img');

let listBtn =  document.getElementById('liste-classes-btn');
let statistiqueBtn = document.getElementById('statistique-btn');
let parametreBtn = document.getElementById('parametre-btn');
let seanceBtn = document.getElementById('seance-btn');
let profileBtn = document.getElementById('profile-btn');

function goTo(callback_func){
    if(root.children.length != 0){
        root.children[0].classList.add('remove-content')
        setTimeout(()=>{
            root.innerHTML = '';
            callback_func();
        }, 250)
    }
}

async function loadClassesList(){
    let [res,req] = await loadData('/Professor/Inc/Api/CurrentUser.inc.php');
    let genderWord = res.gender == "man" ? "M" : "Mme";
    header__title.innerHTML = "Liste d'absence";
    header__title__details.innerHTML = "Classes";
    prof__name.innerHTML = genderWord+". "+res.nomProf
    prof__image.setAttribute("src",`/Profile-pictures/Teachers/${res.image}`)
    prof__image.setAttribute("alt",`${res.nomProf} ${res.prenomProf}`)

    root.appendChild(new ListClasses(res).render());
}

async function loadSettings(){
    let [res,req] = await loadData('/Professor/Inc/Api/CurrentUser.inc.php');
    header__title.innerHTML = "Parametres";
    header__title__details.innerHTML = "";
    root.appendChild(new Setting(res).render());
}

window.addEventListener('load', () =>{
    loadClassesList()
})

listBtn.addEventListener('click', () =>{
    goTo(loadClassesList)
})
statistiqueBtn.addEventListener('click', () =>{
    goTo(()=>{
        let p = document.createElement('div');
        p.setAttribute('id', 'p');
        p.innerHTML = 'Hello this statistique';
        root.appendChild(p);
    })
})
parametreBtn.addEventListener('click', () => {
    goTo(loadSettings)
})



export {root, goTo, header__title, header__title__details, today__date, prof__name}