import ListClasses from "./list_classes/Classes_container.js";

let root = document.getElementById('root');

let header__title = document.getElementById('header-title');
let header__title__details = document.getElementById('header-title-details');
let today__date = document.getElementById('today-date');
let prof__name = document.getElementById('prof-name');

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
async function loadUser(){
    let req = await fetch('/Professor/Inc/Api/CurrentUser.inc.php')
    let res = req.json()
    return res;
}
async function loadClassesList(){
    header__title = "Liste d'absence";
    header__title__details = "Classes";

    let current_User = await loadUser();
    root.appendChild(new ListClasses(current_User).render());
}

window.addEventListener('load', () =>{
    loadClassesList();
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


