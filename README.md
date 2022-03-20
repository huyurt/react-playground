# React

## 1. JavaScript Refresher

### 1.1. `var`, `let` and `const`

|      | Tanım        | `var`                                              | `let`                                | `const`                                                      |
| ---- | ------------ | -------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| 1    | Scope        | Function scope özelliğini taşır.                   | Block scope özelliğini taşır.        | Block scope özelliğini taşır.                                |
| 2    | Declaration  | Değişken tekrar tanımlanabilir.                    | Değişken tekrar tanımlanamaz.        | Değişken tekrar tanımlanamaz.                                |
| 3    | Immutability | Değişken değeri güncellenebilir.                   | Değişken değeri güncellenebilir.     | Değişken değeri güncellenemez. Nesne içerisindeki özelliği değiştirilebilir. |
| 4    | Hoisting     | Değişken önce kullanıp, daha sonra tanımlanabilir. | Değişken tanımlanmadan kullanılamaz. | Değişken tanımlanmadan kullanılamaz.                         |

````javascript
function print() {
  // Scope
  if(true)  {
    var varVariable = 'variable 1';
    let letVariable = 'variable 2';
    const constVariable = 'variable 3';
  }

  console.log(varVariable);
  console.log(letVariable); // ReferenceError: letVariable is not defined
  console.log(constVariable); // ReferenceError: constVariable is not defined

    
  // Decleration
  var text1 = 'text1';
  var text1 = 'text01';

  let text2 = 'text2';
  let text2 = 'text02'; // SyntaxError: Identifier 'text2' has already been declared
  
  const text3 = 'text3';
  const text3 = 'text03'; // SyntaxError: Identifier 'text3' has already been declared
    
    
  // Immutability
  var def1 = '1';
  def1 = '1';
  
  let def2 = '2';
  def2 = '2';
  
  const def3 = '3';
  def3 = '3'; // TypeError: Assignment to constant variable.
    
    
  // Hoisting
  number1 = 1;
  console.log(number1);
  var number1;

  number2 = 2;
  console.log(number2);
  let number2; // ReferenceError: Cannot access 'number2' before initialization
    
  number3 = 3;
  console.log(number3);
  const number3; // Missing initializer in const declaration
}

print();
````



### 1.2. Arrow Functions

````js
function callMe(name) { 
    console.log(name);
}

const callMe = function(name) { 
    console.log(name);
}

const callMe = (name) => { 
    console.log(name);
}
````



### 1.3. Exporting & Importing

<img src="https://blogger.googleusercontent.com/img/a/AVvXsEg-0cacGmraqq8QAtHvhPVgF0cODMolk2y93cxlud3n96Y0B6XmZNrZg3PAe_1K5o9Z8HApunZe04pg76ufU0zVb3zCTt5RcZ59UG16VijMjdGvWb2VZraKwftPOgo2JkKDUbqarPWUQdJ9GMPr_3HRO3rI3Wv-R2UcIIAG98rqHYAfVZv8K-jCBpImGw">



### 1.4. Class

````js
class Human {
    gender = 'female';
    
    printGender = () => {
        console.log(this.gender);
    }
} 

class Person extends Human {
    name = 'Hudayfe';
	gender = 'male';
    
    printName = () => {
        console.log(this.nane);
    }
}

const person = new Person();
person.printName();
person.printGender();
````



### 1.5. Spread & Rest Operators

````js
// spread for array elements
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 4, 5, [4, 5, 6]];
console.log(newNumbers); // [1, 2, 3, 4, 4, 5, [4, 5, 6]]


// spread for object propeties
const person = {
    name: 'Hasan'
};
const newPerson = {
    ...person,
    name: 'Hudayfe',
    surname: 'Yurt'
};
console.log(newPerson); // {
						//   name: "Hudayfe",
						//   surname: "Yurt"
						// }


// rest for function arguments
const filter = (...args) => {
    return args.filter(el => el === 1);
};
console.log(filter(1, 2, 3, 1, [1, 2])); // [1, 1]
````



### 1.6. Destructuring

````js
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1
						 // 3

const person = {
    name: 'Hudayfe',
    surname: 'Yurt'
};
const {surname} = person;
console.log(surname); // Yurt
````



### 1.7. Reference & Primitive Types

````js
const person = {
    name: 'Hasan'
};
const secondPerson = person;

person.name = 'Hudayfe';
console.log(secondPerson); // Hudayfe
````

````js
const person = {
    name: 'Hasan'
};
const secondPerson = {
    ...person
};

person.name = 'Hudayfe';
console.log(secondPerson); // Hasan
````

````js
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]
````



## 2. React Basics

#### Component Driven Design (CDD)

Bir web sitesi, tekrar eden component'lerin bir araya gelmesiyle oluşur. Örneğin, bir butonu ihtiyaç duyulan yerde kullanırken kullanılan yerde her seferinde tenımlamak yerine bir kere tanımlayıp bu buton component'ni ihtiyaç duyulan yerde kullanma prensibi denilebilir.



Bu yaklaşım faydaları:

- Hızlı geliştirme
- Daha kolay maintenance: Component'te güncelleme veya genişleme yapılmak istendiğinde web sitesinin bir çok yerinde değişiklik yapmak yerine component'in ilgili dosyasında değişiklik yapmak yeterli olur.
- Reusability (DRY): Component'i tekrar tekrar yazmayı engeller.
- Standardization
- Modülerlik (SoC): Component'ler birbirinden etkilenmeden, bağımsız olarak tanımlanır.
- Test edilebilirlik: Sistemin her parçasının sorumluluklarını anlamak ve ayırmak daha kolay olduğu için daha büyük sistemler daha kolay test edilebilir.



#### Atomic Design

<img src="https://blogger.googleusercontent.com/img/a/AVvXsEhE756n2Pq5tp64UFIPrypg-FOD73tGID4dJoSaat-VjmghRhMFPwktrXAOalc9jKOLA_ih0dE51eqOjtihqmDsJR3PSbEfCjR1lOple3f1P7PsOhY0izytFNasGdWEs_YfBXZ05PFm6nK5P2ra66wHv2YLt065OSvDke58oanAW9D4eCznCOnm1AZKhw">

#### Imperative Approach vs Declarative Approach

Her etkileşimde istenen UI durumuna ulaşmak için adım adım DOM mutation'ı yapılır.

<img height="250" src="https://blogger.googleusercontent.com/img/a/AVvXsEhHkfquge781tdpdwxq3i01ecLt2UTSh75PZDgnNvvFHpnspVE_vy5JRMAKyUmx52oQicLG-DOxi0xl5zmFBxDFNMOH4diDUXhdAblg6i4vz7cT8NzpK6qlt2gre2m7RKcMPfDGeZIhZjOlMQPYqF2DxrbKV9JIqdVEzOUYLRynXWzZ2yDu4rba-j0EkQ">



React'te, istenen UI durumuna ulaşmak için adım adım talimatlar yapılmaz. Bunun yerine, her sahne için istenen son UI tanımlanır.

<img height="250" src="https://blogger.googleusercontent.com/img/a/AVvXsEjdJzfpvdi6R69xsFa9uMIhHOMhAGjT_3Nr8wMug6LGMHXvfyAKMzkYgV-T3cCkZ6_o2mJngsMhrD8zU_2Ta52jwRqO2mnFEXegMfaYWNXtBNIOKFVEnXvki8Ih0iT4AZOUhHc95xY_KUoe6pMHxFM-NnGNK6k5XNbIyQPKBQoQoazMkYIGv3kdPxtPlA"><img height="250" src="https://blogger.googleusercontent.com/img/a/AVvXsEi5QypJ064IIg3UojuUt8U0AYXi0gAWy6ZSIms-aKNxYLsdqUyCyscTFsixx6HYkCxs1zI1sQ--86U1x8aDvVmww84d5HIdOimdaKQsg56DFx3NXMm6BydP9UK7kX34YvVgvW-CqUKwxh9gy4jBcCl8zW62fXfQ-bnxW3wpsRfe1M9QBKTEf492t7IBEw">



#### How React Works?

