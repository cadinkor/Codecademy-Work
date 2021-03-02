let input = 'Here we go'
let vowels = ['a','e','i','o','u']
let resultArray = []

for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      if(input[i] === 'e'){
        resultArray.push('ee')
      } else if(input[i] === 'u'){
        resultArray.push('uu')
      } else {
        resultArray.push(input[i])
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase())

// nested loop example:
const animal = 'cat';
 
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}

// output => c 1 2 3 a 1 2 3 t 1 2 3 