const person = {
  firstName: 'Michael',
  lastName: 'Suh',
  hobby: 'golf'
};
console.log(person);

const fullname = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullname);

person.job = 'Web Developer';
console.log("The person's current job is:", person.job);

person.previousJob = 'Student';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
