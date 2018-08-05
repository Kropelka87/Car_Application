import Car from './car.class';

let honda = new Car("Honda", "Civic", 15000, 200000, "used", "silver");
let jeep = new Car("Jeep", "Grand Cherokee", 40000, 300000, "used", "#000000");

let fleet = [];
fleet.push(honda, jeep);

export default fleet;