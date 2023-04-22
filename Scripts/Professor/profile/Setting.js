export default class Setting{
    constructor(teacher){
        this.teacher = teacher;
        this.setting =  document.createElement("div");
        this.settingHead = document.createElement("div");
        this.teacherImage = document.createElement("img");
        this.teacherName = document.createElement("h2");
        this.settingList = document.createElement("ul");

        this.settingBody = document.createElement("div");
        this.settingInfosForm = document.createElement("form");
        this.settingPasswordForm = document.createElement("form");

    }
    createSettingHead(){
        this.settingHead.setAttribute('class', 'setting-head');
        this.teacherImage.setAttribute('src', '/Profile-pictures/Teachers/'+this.teacher.image)
        this.teacherImage.setAttribute('alt', this.teacher.nomProf+' '+this.teacher.prenomProf);
        this.teacherName.innerHTML = this.teacher.nomProf+' '+this.teacher.prenomProf;

        this.settingList.setAttribute('class', 'setting-list-container');
        this.settingList.innerHTML = `
            <li class="setting-list">
                <button id="change-infos-btn">
                    <div class="text">Changer les informations</div>
                </button>
            </li>
            <li class="setting-list">
                <button id="change-pwd-btn">                      
                    <div class="text">Changer le mot de passe</div>
                </button>
            </li>
            <div class="setting-indicator">
                <dic class="circle"></div>
            </div>
        `
        this.settingHead.append(this.teacherImage, this.teacherName, this.settingList)
    }
    createSettingInfosForm(){
        this.settingInfosForm.setAttribute('class', 'infos-form')
        this.settingInfosForm.innerHTML = `
            <h3>Parametre du profile</h3>
            <div class='inputs-container'>
                <div class='inputs-side'>
                    <div class="form-group prenom-group">
                        <div class="input-box">
                            <label for="prenom" class="label">Votre Prenom</label>
                            <input type="text" id="prenom" name="prenom" onfocus="onFocusInput(this)" onblur="onBlurInput(this)">
                            <i class="fas fa-user"></i>
                        </div> 
                    </div>
                    <div class="form-group nom-group">
                        <div class="input-box">
                            <label for="nom" class="label">Votre Nom</label>
                            <input type="text" id="nom" name="nom" onfocus="onFocusInput(this)" onblur="onBlurInput(this)">
                            <i class="fas fa-user"></i>
                        </div> 
                    </div>
                    <div class="form-group phone-group">
                        <div class="input-box">
                            <label for="phone" class="label">Telephone</label>
                            <input type="text" id="phone" name="phone" onfocus="onFocusInput(this)" onblur="onBlurInput(this)">
                            <i class="fas fa-user"></i>
                        </div> 
                    </div>
                    <div class="form-group email-group">
                        <div class="input-box">
                            <label for="email" class="label">Adresse Email</label>
                            <input type="text" id="email" name="email" onfocus="onFocusInput(this)" onblur="onBlurInput(this)">
                            <i class="fas fa-user"></i>
                        </div> 
                    </div>
                </div>
                <div class="image-side">
                    <div class="file-input">
                        <input type="file" id="file" name="file">
                        <button class="import-img" id="import-img">Choisir une image</button>
                        <img id="image" src="/Profile-pictures/Teacher/${this.teacher.image}"/>
                    </div>
                </div>
            </div>
        `
    }
    render(){
        this.createSettingHead();
        this.createSettingBody();
        this.setting.setAttribute("class", "setting");
        this.setting.append(this.settingHead, this.settingBody);
        return this.setting;
    }
}