export default class Car {
    constructor(brand, model, price, course, condition, color) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.course = course;
        this.condition = condition;
        this.color = color;
        this.id = this.brand + this.model + this.course + Math.random(2);
        this.deleteButtonId = this.brand + this.model + this.course + Math.random(2);
        this.settingsButtonId = this.brand + this.model + this.course + Math.random(2);
        this.showId = this.brand + this.model + this.course + Math.random(2);
        this.changeCourseId = this.brand + this.model + this.course + Math.random(2);
        this.buttonCourseId = this.brand + this.model + this.course + Math.random(2);
        this.addPriceId = this.brand + this.model + this.course + Math.random(2);
        this.buttonAddPriceId = this.brand + this.model + this.course + Math.random(2);
    }
    
    getInfo() {
        console.log(`Auto: ${this.brand} ${this.model}, price: ${this.price}`);
    }

    listItem() {
        return `<div id="${this.id}" style="border: 1px solid #ced4da; padding: 30px; height: 321px; border-radius: 10px; display: inline-block; box-shadow: 10px 10px 29px -10px rgba(0,0,0,0.66);">
            <h3 style="margin-bottom: 20px;">${this.brand} ${this.model} <div style="border-radius: 50px; width: 15px; padding: 15px; display: inline-block; background-color: ${this.color}; float: right; border: 1px solid #ced4da;"></div> </h3>
            <div class="card" style="width: 18rem">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: ${this.price} zł</li>
                    <li class="list-group-item">Course: ${this.course} km</li>
                    <li class="list-group-item">Condition: ${this.condition}</li>
                </ul>
            </div>
            <button class="btn" style="margin-top: 20px;" id="${this.settingsButtonId}">Settings</button>
            <button class="btn btn-danger" style="margin-top: 20px;" id="${this.deleteButtonId}">Delete Car</button>
            <div id="${this.showId}" style="display:none;">
                <div style="margin-top: 20px;">
                    <input id="${this.changeCourseId}" placeholder="Change course"/>
                    <button class="btn" id="${this.buttonCourseId}">Change</button>

                    <input id="${this.addPriceId}" placeholder="Add to price"/>
                    <button class="btn" id="${this.buttonAddPriceId}">Add</button>

                </div>
            </div>
        </div>`
    }  

    toggleSettings() {
        let settings = document.getElementById(this.showId);
        let item = document.getElementById(this.id);
        settings.style.display = settings.style.display === 'none' ? '' : 'none';
        item.classList.contains('itemAll') ? item.classList.remove('itemAll') : item.classList.add('itemAll');
    }

    changeCourseClass() {
        let newCourse = document.getElementById(this.changeCourseId).value;
        this.course = newCourse;
    }

    addPriceClass() {
        let addPrice = document.getElementById(this.addPriceId).value;
        this.price += parseInt(addPrice);
    }
}