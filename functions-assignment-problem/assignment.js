const functionOne = (name , age = 5) => {
  console.log(name, age)
  console.log('This is ' + name + ' and his age is:' + age);
}
functionOne("Silvio");


function functionTwo () {
  console.log(`Hello ${name}`);
}
functionTwo("Silvio")

const functionThree = name => alert(`Hi ` + name);

functionThree("Silvio");