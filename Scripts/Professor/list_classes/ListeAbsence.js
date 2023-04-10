import { loadData } from "../../utils.js";

export default class ListeAbsence{
    constructor(codeClass, duree){
        this.codeClass = codeClass;
        this.duree = duree;
        this.container = document.createElement("div");
        this.listHeader = document.createElement("div");
        this.listTitle = document.createElement("h2");
        this.filterForm = document.createElement("form");
        this.filterDates = document.createElement('div');
        this.choosedDate = document.createElement('div');
        this.datesList = document.createElement('div');
        this.searchForm = document.createElement('form');
        this.saveBtn = document.createElement('button');
        this.listContainer = document.createElement('div');
        this.list = document.createElement('table');
        this.listHead = document.createElement('thead');
        this.listBody = document.createElement('tbody');
    }

    createListHeader(){
        this.listHeader.setAttribute('class', 'le-header');
        this.listTitle.setAttribute('class', 'list-title');
        this.listTitle.innerHTML = 'Liste des étudiants'

        this.filterForm.setAttribute('class', 'filter-date');
        this.filterDates.setAttribute('class', 'filter-dates');
        this.choosedDate.setAttribute('class', 'choosed-option');
        this.choosedDate.setAttribute('id', 'choosed-option');
        this.choosedDate.innerHTML = `<div class="the-date" data-value='all' >Tous les etudiant</div>
                                      <i class="fas fa-caret-down"></i>`
        this.datesList.setAttribute('class', 'options-list')
        this.datesList.setAttribute('id', 'options-list')
        this.datesList.innerHTML = `<div class="option" data-value='all'>Tous les etudiant</div>
                                    <div class="option" data-value='absents'>Seuls les absents</div>
                                    <div class="option" data-value='presents'>Seuls les presents</div>`
        let options = this.datesList.querySelectorAll('.option');
        function chooseDate(list,target,choosed){
            list.classList.toggle('show-options-list')
            options.forEach(element => {
                element.classList.remove('choosed');
                target.classList.add('choosed');
                choosed.children[0].dataset.value = target.dataset.value;
                choosed.children[0].innerHTML = target.innerHTML;
            });
        }
        options.forEach(element => element.addEventListener('click', (e)=>{
            chooseDate(this.datesList,e.target, this.choosedDate)
        }))
        this.choosedDate.addEventListener('click', () => {
            this.datesList.classList.toggle('show-options-list')
        })

        this.filterDates.append(this.choosedDate,this.datesList)
        this.filterForm.appendChild(this.filterDates)

        this.searchForm.setAttribute('class', 'filter-search');
        this.searchForm.innerHTML = `<input type="search" id="search-box" name="search-text" placeholder="Recherche etudiant">
                                     <button type="submit name="submit"><i class="fas fa-search"></i></button>`
        this.saveBtn.setAttribute('class', 'list-save');
        this.saveBtn.innerHTML = 'Enregistrer'
        
        this.listHeader.append(this.listTitle, this.filterForm, this.searchForm, this.saveBtn)
    }
    renderEtudiantRow(data){
        let row = `<tr data-id='${data.cne}'>
                       <td class="orderNb">${data.orderNb}</td>
                       <td class="etudiant-name">
                           <div class="name-data">
                               <img src="../../Profile-pictures/Etudiants/etudiant.png" alt="Adelghani El Mouak" />
                               <p>${data.prenomEtudiant} ${data.nomEtudiant}</p>
                           </div>
                       </td>`
        let num = 1;
        for(let i = 0; i<this.duree; i++) {
            row += `<td class="hour"><input type="checkbox" name="hour1" value="${num}" /></td>`;
            num += 1;
        }
        row += `<td class="comment"><input type="text" name="comment" placeholder="Entrez votre commentaire ici ..." /></td>
                </tr>`
        return row;
    }
    async createList(){
        this.listContainer.setAttribute('class', 'etudiant-list-container')
        this.list.setAttribute('class', 'etudiant-list');
        let hoursTitle = [
            '<td class="hour">8:30</td>',
            '<td class="hour">9:30</td>',
            '<td class="hour">10:30</td>',
            '<td class="hour">11:30</td>'
        ]
        let thead = `<tr>
                                        <td class="orderNb">N ordre</td>
                                        <td class="name">Non et Prenom</td>`
        for(let i = 0; i < this.duree; i++){
            thead += hoursTitle[i];
        }
        thead += `<td class="comment">Commentaire</td>
                  </tr>`;
        this.listHead.innerHTML = thead;

        let data = await loadData(`/Professor/Inc/Api/Class.php?codeClass=${this.codeClass}`);
        
        data.forEach(item => {
            let dict = {
                        cne:item.cne,
                        orderNb:item.orderNb,
                        prenomEtudiant:item.prenom,
                        nomEtudiant:item.nom
                    }
            this.listBody.innerHTML += this.renderEtudiantRow(dict)
        })
        this.list.append(this.listHead,this.listBody)
        this.listContainer.appendChild(this.list)
    }
    render(){
        this.createListHeader();
        this.createList();
        this.container.setAttribute('class', 'list-etudiants-container')
        this.container.append(this.listHeader, this.listContainer)
        return this.container;
    }
}