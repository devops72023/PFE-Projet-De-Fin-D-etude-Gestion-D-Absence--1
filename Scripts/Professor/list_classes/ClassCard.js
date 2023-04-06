export default class ClassCard{
    constructor(options){
        this.options = options;
        this.card =  document.createElement('div');
    }
    configCard(){
        this.card.setAttribute('class', 'card');
        this.card.innerHTML = `<div class="branch-img" >
                                <img src="../../Images/branch-images/${this.options.image}" />
                                </div>
                                <h2 class="class-level">${this.options.level}</h2>
                                <h3 class="class-name">${this.options.name}</h3>
                                <span class="this"></span>`
    }
    render(){
        this.configCard();
        return this.card
    }
}