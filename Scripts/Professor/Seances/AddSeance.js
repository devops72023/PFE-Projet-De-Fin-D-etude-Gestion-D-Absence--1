import { loadData } from "../../utils";

export default class AddSeance{
    constructor(){
        this.addSeance = document.createElement('div');
        this.header = document.createElement('div');
        this.form = document.createElement('form');
        this.Classes = document.createElement('div');
        this.Subjects = document.createElement('div');
        this.Days = document.createElement('div');
        this.Hours = document.createElement('div');
        this.Period = document.createElement('div');
    }
    createHeader(){
        this.header.setAttribute('class', 'se-header');
        this.header.innerHTML = `
            <h2 class="se-header-title">Ajouter une séance</h2>
        `
    }
    chooseDate(list,target,choosed, options){
        list.classList.toggle('show-options-list')
        options.forEach(element => {
            element.classList.remove('choosed');
            target.classList.add('choosed');
            choosed.children[0].dataset.value = target.dataset.value;
            choosed.children[0].innerHTML = target.innerHTML;
        });
    }
    async createClassesInpt(){
        this.Classes.setAttribute('class', 'form-group');
        let [res] = await loadData('/Professor/Inc/Api/Class.inc.php');
        let classes = ''
        res.forEach(item => {
            classes += `<div class="option" data-value="${item.codeClasse}">${item.niveauClasse} ${item.nomClasse}</div>`
        });
        this.Classes.innerHTML = `
            <div class="filter">
                <div class="choosed-option" id="choosed-option">
                    <div class="the-date" data-value="">Choisir une classe</div>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="options-list" id="options-list">
                    ${classes}
                </div>
            </div>
            `
        let choosedDate = this.Classes.querySelector('#choosed-option');
        let optionsList = this.Classes.querySelector('#options-list');
        let options = this.Classes.querySelectorAll('.option');

        options.forEach(element => element.addEventListener('click', async (e)=>{
            this.chooseDate(optionsList,e.target, choosedDate, options)
            console.log('clicked')
        }))
        choosedDate.addEventListener('click', () => {
            optionsList.classList.toggle('show-options-list')
        })
    }
    async createSubjectsInpt(){
        this.Subjects.setAttribute('class', 'form-group');
        let [res] = await loadData('/Professor/Inc/Api/Subjects.inc.php');
        let subjects = ''
        res.forEach(item => {
            subjects += `<div class="option" data-value="${item.codeMtiere}">${item.nomMatiere}</div>`
        });
        this.Subjects.innerHTML += `
            <div class="filter">
                <div class="choosed-option" id="choosed-option">
                    <div class="the-date" data-value="">Choisir une Matiere</div>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="options-list" id="options-list">
                    ${subjects}
                </div>
            </div>
        `
        let choosedDate = this.Subjects.querySelector('#choosed-option');
        let optionsList = this.Subjects.querySelector('#options-list');
        let options = this.Subjects.querySelectorAll('.option');

        options.forEach(element => element.addEventListener('click', async (e)=>{
            this.chooseDate(optionsList,e.target, choosedDate, options)
        }))
        choosedDate.addEventListener('click', () => {
            optionsList.classList.toggle('show-options-list')
        })
    }
    async createDaysInpt(){
        this.Days.setAttribute('class', 'form-group');
        let DAYS = {1:'Lundi', 2:'Mardi', 3:'Mercredi', 4:'Jeudi', 5:'Vendredi', 6:'Samedi'}
        let days = ''
        DAYS.forEach(item => {
            days += `<div class="option" data-value="${item.codeMtiere}">${item.nomMatiere}</div>`
        });
        this.Days.innerHTML += `
            <div class="filter">
                <div class="choosed-option" id="choosed-option">
                    <div class="the-date" data-value="">Choisir un Jour</div>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="options-list" id="options-list">
                    ${days}
                </div>
            </div>
        `
        let choosedDate = this.Days.querySelector('#choosed-option');
        let optionsList = this.Days.querySelector('#options-list');
        let options = this.Days.querySelectorAll('.option');

        options.forEach(element => element.addEventListener('click', (e)=>{
            this.chooseDate(optionsList,e.target, choosedDate, options)
        }))
        choosedDate.addEventListener('click', () => {
            optionsList.classList.toggle('show-options-list')
        })
    }
    createForm(){
        this.createClassesInpt();
        this.createSubjectsInpt();
        this.createDaysInpt();
        this.form.setAttribute('class', 'se-form');
        this.form.append(
            this.Classes,
            this.Subjects,
            this.Days,
            this.Hours,
            this.Period
        )
    }
    render(){
        this.createHeader();
        this.createForm()
        this.addSeance.setAttribute('class', 'seances-list-container')
        this.addSeance.append(this.header, this.form)
        return this.addSeance
    }
}