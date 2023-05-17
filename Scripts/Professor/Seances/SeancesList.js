import { getDayName, loadData } from "../../utils.js";

export default class SeanceList{
    constructor(){
        this.listContainer = document.createElement('div');
        this.header = document.createElement('div');
        this.list = document.createElement('table');
    }
    createHeader(){
        this.header.setAttribute('class', 'se-header');
        this.header.innerHTML = `
            <h2 class="se-header-title">liste des séances</h2>
            <div class="filter-container">
                <span class="word">Afficher</span>
                <div class="filter">
                    <div class="choosed-option" id="choosed-option">
                        <div class="the-date" data-value="all">Tous les seances</div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="options-list" id="options-list">
                        <div class="option" data-value="all">Tous les seances</div>
                        <div class="option" data-value="second">Seuls les 2eme Annees</div>
                        <div class="option" data-value="first">Seuls les 1er Annees</div>
                    </div>
                </div>
            </div>
        `
        let choosedDate = this.header.querySelector('#choosed-option');
        let optionsList = this.header.querySelector('#options-list');
        let options = this.header.querySelectorAll('.option');

        function chooseDate(list,target,choosed){
            list.classList.toggle('show-options-list')
            options.forEach(element => {
                element.classList.remove('choosed');
                target.classList.add('choosed');
                choosed.children[0].dataset.value = target.dataset.value;
                choosed.children[0].innerHTML = target.innerHTML;
            });
        }
        options.forEach(element => element.addEventListener('click', async (e)=>{
            chooseDate(optionsList,e.target, choosedDate)
            
        }))
        choosedDate.addEventListener('click', () => {
            optionsList.classList.toggle('show-options-list')
        })
    }
    renderRow(data){
        return `
            <tr>
                <td class="classes-col">${data.niveauClass+' '+data.nomClass}</td>
                <td class="classes-col">${data.nomMatiere}</td>
                <td class="classes-col">${getDayName(data.jour)}</td>
                <td class="classes-col">${data.period}</td>
            </tr>
        `
    }
    async createList(){
        this.list.setAttribute('class', 'se-list');
        this.list.innerHTML = `
            <tr>
                <td class="classes-col">Classes</td>
                <td class="classes-col">Matiere</td>
                <td class="classes-col">Jour de semaine</td>
                <td class="classes-col">Durée</td>
            </tr>
        `
        let [res] = await loadData('/Professor/Inc/Api/Seances.inc.php')
        res.forEach(seance => {
            this.list.innerHTML += this.renderRow(seance)
        });
    }
    render(){
        this.createHeader();
        this.createList();
        this.listContainer.setAttribute('class', 'seances-list-container')
        this.listContainer.append(this.header, this.list)
        return this.listContainer;
    }
}