const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  };

  const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  };
Object.freeze(clone1);
Object.freeze(clone2);

let samePerson = person;

person.age++;
person.country = 'FR';



  
