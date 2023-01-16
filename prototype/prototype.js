// prototype chain consists of a __proto__ property containing the parent's properties and methods.

const meuArray = [1,2,3,4,5, 'a']
// meuArray.__proto__ -> Array.prototype -> Object.prototype -> null

function myFunction(){
    return 1 + 1
}
// myFunction.__proto__ -> Function.prototype -> Object prototype -> null

meuArray.map((item) => console.log(item))
// meuArray.map checks if the map method is declared
// in the meuArray type, then it goes up to the next prototype,
// which is the Array. If the method doesn't exist, it will search
// through the prototype chain for the method.

const myObject = {
    a: 1,
    b: 2
}
// myObject.__proto__ -> Object.prototype -> null

const newObject = Object.create(myObject) // create new object from the specified prototype, instead the object would be assigned by reference
newObject.b = 5
newObject.newProperty = 4

console.log(myObject.hasOwnProperty('a'), newObject.hasOwnProperty('a'))


function SalaAula(alunos){
    this.alunos = alunos
}

SalaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    }
}

const minhaSala = new SalaAula(["John", "Mary"])
minhaSala.adicionarAluno("Dude")

console.log(minhaSala.alunos)

const emptyObject = Object.create(null)

/* /////////////////////////////////////////////////////////////////////////////////////// */

const parent = {
    value: 2,
    method() {
        return this.value + 1;
    }
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
    __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead