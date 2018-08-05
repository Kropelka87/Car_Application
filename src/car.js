import fleet from './fleet';
import Car from './car.class';

export const generateList = (arr) => {
    return `<div style="display: grid; grid-template-columns: 33% 33% 33%;">
    ${arr.map(item => item.listItem())
        .join("")}</div>`
};

export const addNewCar = () => {
    let newCar = new Car(
        document.getElementById('brand').value,
        document.getElementById('model').value,
        document.getElementById('price').value,
        document.getElementById('course').value,
        document.getElementById('condition').value,
        document.getElementById('color').value
    );
    fleet.unshift(newCar);
    clearInputs();
    refresh();
};

export const refresh = () => {
    let main = document.getElementById('main');
    main.innerHTML = generateList(fleet);
    deleteCars();
    toggleSettings();
    changeCourse();
    changePrice();
}

//pobranie elementu i go usunięcie
export const deleteCars = () => {
    fleet.map(car => {
        let button = document.getElementById(car.deleteButtonId);
        button.addEventListener('click', () => deleteCar(car.id) + refresh());
    });
};

//znalezienie elementu do usunięcia
export const deleteCar = id => {
    fleet.splice(fleet.findIndex(car => car.id === id), 1)
};

export const toggleSettings = () => {
    fleet.map(car => {
        let button = document.getElementById(car.settingsButtonId);
        button.addEventListener('click', () => car.toggleSettings());
    });
};

//changeCourseClass (metoda callback na buttonie) to jest ta sama metoda z car.class.js, która została napisana
// musimy dodać refresh'a gdyż ZMIENIAMY WARTOŚĆ
export const changeCourse = () => {
    fleet.map(car => {
        let button = document.getElementById(car.buttonCourseId);
        button.addEventListener('click', () => car.changeCourseClass() + refresh());
    });
};

export const changePrice= () => {
    fleet.map(car => {
        let button = document.getElementById(car.buttonAddPriceId);
        button.addEventListener('click', () => car.addPriceClass() + refresh());
    });
};

export const clearInputs = () => {
    document.getElementById('brand').value = "";
    document.getElementById('model').value = "";
    document.getElementById('price').value = "";
    document.getElementById('course').value = "";
    document.getElementById('condition').value = "";
    document.getElementById('color').value = "";
};