// function numberArgsFunction(a:number, b:number){
//
// }


class UserType1{
    name: string;
    age: number;
    status: boolean;


    constructor(name:string, age:number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    info(): string{
        return this.name
    }

}
function parametrizationFn(
    str: string,
    num: number,
    truest: boolean,
    user: UserType1,
    arr: any[],
    skills: string[],
    users:{name:string, age: number}[],
){

}
parametrizationFn(
    'okten',
    100,
    true,
    // {name: 'Oleg', age:31, status: true},
    new UserType1('Oleg', 31, true),
    [1,3,4],
    ['java', 'js'],
    [{name: 'kokos', age:21,}, {name: 'laso', age: 333}]
);

interface Car{
    model: string,
    power: number,
    producer?: string,
    drive: ()=> number;
}

function tuningCar(car:Car){

}
tuningCar({
    model: 'Subaru',
    power: 256,
    producer:'FHI',
    drive: function () {
return 100;
    }});
tuningCar({
    model:'Subaru',
    power:233,
    drive: function (){
        console.log('hgfhd')
        return 3434;
    }});


class Subaru implements Car{
    model: string;
    power: number;
    producer: string;
    awd: boolean=true;
    drive(): number {
        return 0;
    }
    constructor(model:string, power: number, producer: string, awd: boolean) {
        this.model = model;
        this.power= power;
        this.producer = producer;
        this.awd = awd;
    }
}

class Toyota  implements Car{
    model: string;
    power: number;
    producer: string;
    price:number = 353443;
    drive(): number {
        return 0;
    }
    constructor(model:string, power: number, producer: string, price: number) {
        this.model = model;
        this.power= power;
        this.producer = producer;
        this.price = price;
    }
}


let cars: Car[]=[
    new Subaru('legacy', 565, 'subaru', true),
    new Toyota('Camry', 265, 'toyota',34322),

];
// let firstCar = cars[0] as Subaru;
// firstCar.awd


class Client{
    private name: string;
    private age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
    setNewAge(newAge) {
        if (newAge>0) {
            this.age = newAge
        }

    }
}
 let client = new Client('vasya', 33);
