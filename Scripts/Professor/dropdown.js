let choosed_date = document.getElementById('choosed-date');
let dates_list = document.getElementById('dates-list');
let options = document.querySelectorAll('.option');

function chooseDate(){
    dates_list.classList.toggle('show-dates-list')
    options.forEach(element => {
        element.classList.remove('choosed');
        this.classList.add('choosed');
        choosed_date.children[0].innerHTML = this.innerHTML;
    });
}
options.forEach(element => element.addEventListener('click', chooseDate))
choosed_date.addEventListener('click', () => {
    dates_list.classList.toggle('show-dates-list')
})