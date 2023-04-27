export default class AddSeance{
    constructor(){
        this.addSeance = document.createElement('div');
        this.header = document.createElement('div');
        this.form = document.createElement('form');
    }
    createHeader(){
        this.header.setAttribute('class', 'se-header');
        this.header.innerHTML = `
            <h2 class="se-header-title">Ajouter une séance</h2>
        `
    }
    createForm(){
        this.form.setAttribute('class', 'se-form');
        this.form.innerHTML = `
            <div class="form-group">
                <div class="filter">
                    <div class="choosed-option" id="choosed-option">
                        <div class="the-date" data-value="all">Choisir une classe</div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="options-list" id="options-list">
                        <div class="option" data-value="all">Choisir une classe</div>
                        <div class="option" data-value="second">Seuls les 2eme Annees</div>
                        <div class="option" data-value="first">Seuls les 1er Annees</div>
                    </div>
                </div>
            </div>
        `
    }
    render(){
        this.createHeader();
        this.createForm();
        this.addSeance.setAttribute('class', 'seances-list-container')
        this.addSeance.append(this.header, this.form)
        return this.addSeance
    }
}