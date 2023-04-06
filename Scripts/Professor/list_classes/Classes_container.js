import ClassCard from "./ClassCard.js";

export default class ListClasses{
    constructor(currentUser){
        this.currentUser = currentUser;
        this.container = document.createElement('div');
        this.teacher_div = document.createElement('div');
        this.filter_section = document.createElement('div');

        this.filter_classes = document.createElement('div');
        this.filter_all = document.createElement('button');
        this.filter_sl_only = document.createElement('button');
        this.filter_fl_only = document.createElement('button');

        this.search_form = document.createElement('form');
        this.date_form = document.createElement('form');
        this.filter_dates = document.createElement('div');
        this.choosed_date = document.createElement('div');
        this.dates_list = document.createElement('div');
        this.classes_card = document.createElement('div');
    }
    createTeacherComponent(){
        let genderWord = this.currentUser.gender == "man" ? "M" : "Mme";
        this.teacher_div.setAttribute('class', 'teacher');
        this.teacher_div.innerHTML = `<h1>BIENVENUE ${genderWord+". "+this.currentUser.nomProf}</h1>`;
        this.teacher_div.innerHTML += `<div class="time-now">${new Date().getHours()+" : "+(new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes())}</div>`
    }
    createFilterComponent(){
        this.filter_section.setAttribute('class', 'filter-section');
        // the class filter elements
        this.filter_classes.setAttribute('class', 'filter-classes');
        this.filter_all.setAttribute('class', 'strong');
        this.filter_all.innerHTML = 'Tous les classes';
        this.filter_sl_only.innerHTML = '2 éme années';
        this.filter_fl_only.innerHTML = '1 er années';
        this.filter_classes.append(this.filter_all,this.filter_sl_only,this.filter_fl_only);

        this.search_form.setAttribute('class','filter-search')
        this.search_form.innerHTML =`\n
                                    <input type="search" id="search-box" name="search-text" placeholder="Recherche classe">
                                    <button type="submit name="submit"><i class="fas fa-search"></i></button>
                                    `;

        // the date filter elements
        function getDayName(stimp){
            var date = new Date(stimp);
            return date.toLocaleDateString('fr-FR', { weekday: 'long' });        
        }
        function getDate(stimp){
            return new Date(stimp).getDate() + '/' + new Date(stimp).getMonth() + '/' + new Date(stimp).getFullYear();
        }
        function weekDays(stimp){
            let date = new Date(stimp)
            let list = '';
            for (let i = 0; i < 7; i++){
                list += `<div class="option" data-value="${stimp}">${getDayName(stimp)+" "+getDate(stimp)}</div>`;
                stimp = date.setDate(date.getDate() - 1);
            }
            return list;
        }
        let today = new Date().getTime();
        this.date_form.setAttribute('class', 'filter-date');
        this.filter_dates.setAttribute('class', 'filter-dates');
        this.choosed_date.setAttribute('class', 'choosed-date');
        this.choosed_date.setAttribute('id', 'choosed-dates');
        this.choosed_date.innerHTML = `\
        \   <div class="the-date" data-value="${today}">${getDayName(today)+" "+getDate(today)}</div>
        \   <i class="fas fa-caret-down"></i>
            `
        this.dates_list.setAttribute('class', 'dates-list');
        this.dates_list.setAttribute('id', 'dates-list');
        this.dates_list.innerHTML = weekDays(today); // generate all the option
        this.filter_dates.append(this.choosed_date,this.dates_list);

        let options = document.querySelectorAll('.option');
        function chooseDate(){
            this.dates_list.classList.toggle('show-dates-list')
            options.forEach(element => {
                element.classList.remove('choosed');
                this.classList.add('choosed');
                this.choosed_date.children[0].innerHTML = this.innerHTML;
            });
        }
        options.forEach(element => element.addEventListener('click', chooseDate))
        this.choosed_date.addEventListener('click', () => {
            this.dates_list.classList.toggle('show-dates-list')
        })

        this.date_form.appendChild(this.filter_dates)
        this.filter_section.append(this.filter_classes, this.search_form, this.date_form)
    }
    createClassesComponent(){
        console.log(this.choosed_date.children[0].dataset.value);
        this.classes_card.setAttribute('class', 'classes-cards')
        this.classes_card.appendChild(new ClassCard({image:'mcw-1.png',level:1,name:'mcw'}).render())
    }
    render(){
        this.createTeacherComponent();
        this.createFilterComponent();
        this.createClassesComponent();

        this.container.setAttribute('class','liste-classes-container');
        this.container.append(this.teacher_div, this.filter_section,this.classes_card);

        return this.container;
    }
}