const jsob={
      "id": 1,
      "name": 'Amit',
}
console.log(jsob)



const newo=new Object();
// object {} created;
newo.id=2
newo.name='Jimiwal'
console.log(newo);
function Person(id,name){
      this.id=id;
      this.name=name;
}

const p1=new Person(1,'Aditya')
const p2=new Person(3,'Armaan')
console.log(p1)
console.log(p2)

const obj1= { company: 'ABC' }
const obj2= { carName: 'Ford' }
console.log({...obj1,...obj2})


// ES6 classes
class AJ{
      constructor(ido,name){
            this.id-ido
            this.name=name
      }
}

const aj2=new AJ(36,'Amit Jimiwal')
const aj1=new AJ(36,'Amit Jimiwal')
console.log(aj2) //{ name: 'Amit Jimiwal' }
console.log(JSON.stringify(aj2)); // {"name":"Amit Jimiwal"}

// _.isEqual(aj1,aj2)
//for iterating through the objects in javascript we use for-in loops
for (const i in aj1){
      console.log(i)
}
// deleting an object property
delete aj1.name
console.log(aj1)

function sum(object){
      let sum=0;
      for (const i in object){
            sum++;
      }
      return sum
}

console.log(sum(p1))

