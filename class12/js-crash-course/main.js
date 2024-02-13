const todo = [
    {
        id: 1,
        text: "Lift weights",
        isCompelted: true,
    },
    {
        id: 2,
        text: "Run",
        isCompelted: false,
    },
    {
        id: 3,
        text: "Cook Dinner",
        isCompelted: false,
    }
]

//for(let i = 0; i < todo.length; i++) {
//    console.log(todo[i].text);
//}

const todoText = todo.map(function(todo) {
    return todo.text;
});

console.log(todoText);


function Car(make, model, year, carfax) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarfax = function() {
        return this.carfax;
    }
    this.getCarMakeModel = function() {
        return `${this.make} ${this.model}`;
    }

}


const car1 = new Car("Toyota", "Corolla", 1986);
const car2 = new Car("Mazda", "RX-7", 1991);

console.log(car1.getMakeModel);
