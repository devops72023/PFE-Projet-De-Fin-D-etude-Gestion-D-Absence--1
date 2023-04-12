import { loadData } from "../../utils.js";

export default class ListeAbsence{
    constructor(data){
        this.data = data;
        this.toSendData = [];
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
                                     <button type="submit name="submit"><i class="fas fa-search"></i></button>`;


        this.saveBtn.setAttribute('class', 'list-save');
        this.saveBtn.innerHTML = 'Enregistrer'
        this.saveBtn.addEventListener('click',()=>{
            this.toSendData = [];
            let hours = this.list.querySelectorAll('.hour');
            hours.forEach(item=>{
                let etudiant = {
                    cne: item.children[0].dataset.id,
                    date: this.data.date,
                    hour: item.children[0].value,
                    absent: item.children[0].checked
                }
                this.toSendData.push(etudiant)
            })
            console.log({'data': this.toSendData})
            fetch('/Professor/Inc/Api/Absence.inc.php',{
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({'data': this.toSendData})
            })
            .then(req => req.json())
            .then(res => console.log(res));

        });
        
        this.listHeader.append(this.listTitle, this.filterForm, this.searchForm, this.saveBtn)
    }
    async renderEtudiantRow(user){
        let row = `<tr data-id='${user.cne}'>
                       <td class="orderNb">${user.orderNb}</td>
                       <td class="etudiant-name">
                           <div class="name-data">
                               <img src="../../Profile-pictures/Etudiants/etudiant.png" alt="Adelghani El Mouak" />
                               <p>${user.prenomEtudiant} ${user.nomEtudiant}</p>
                           </div>
                       </td>`
        for(let i = 0; i<this.data.duree; i++){
            let isAbsent = await loadData(`/Professor/Inc/Api/Absence.inc.php?isAbsent=yes&cne=${user.cne}&date=${this.data.date}&hour=${i+1}`);
            if(isAbsent){
                row += `<td class="hour"><input type="checkbox" data-id="${user.cne}" value="${i+1}" checked/></td>`;
            }
            else{
                row += `<td class="hour"><input type="checkbox" data-id="${user.cne}" value="${i+1}" /></td>`;
            }
        }
        row += `<td class="comment">
                    <input type="text" name="comment" placeholder="Entrez votre commentaire ici ..." />
                </td>
                </tr>`
        return row;
    }
    async createList(){
        this.listContainer.setAttribute('class', 'etudiant-list-container')
        this.list.setAttribute('class', 'etudiant-list');
        let hoursTitle = [
            '<td class="hour1">8:30</td>',
            '<td class="hour2">9:30</td>',
            '<td class="hour3">10:30</td>',
            '<td class="hour4">11:30</td>'
        ]
        let thead = `<tr>
                                        <td class="orderNb">N ordre</td>
                                        <td class="name">Non et Prenom</td>`
        for(let i = 0; i < this.data.duree; i++){
            thead += hoursTitle[i];
        }
        thead += `<td class="comment">Commentaire</td>
                  </tr>`;
        this.listHead.innerHTML = thead;

        let data = await loadData(`/Professor/Inc/Api/Class.inc.php?codeClass=${this.data.codeClass}`);

        if(data.length != 0){
            data.forEach(async(item) => {
                let dict = {
                            cne:item.cne,
                            orderNb:item.orderNb,
                            prenomEtudiant:item.prenom,
                            nomEtudiant:item.nom,
                            date: this.data.date
                        }
                let row = await this.renderEtudiantRow(dict);
                this.listBody.innerHTML += row;
            })
        }else this.listBody.innerHTML = '<tr><td colspan="5">Aucun Etudiant</td><td'

        
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