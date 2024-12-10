import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  console.log('Hello word!');

  // Type string
  let firstName: string = "Dylan"; 
  console.log(typeof firstName);
  
  // Type: any
  let v: any = true;
  v = "string"; 
  console.log(Math.round(v)); 
  
   // Type: undefined & null
   let y: undefined = undefined;
   console.log(typeof y);
  
   let z: null = null;
   console.log(typeof z);
  
   //TypeScript Arrays
   const names: string[] = [];
   names.push("Dylan");
   names.push("Phan");
   console.log(names);
  
   // TypeScript Tuples
     // define our tuple (xác định dữ liệu)
   let ourTuple: [number, boolean, string];
     // initialize correctly (gán giá trị)
   ourTuple = [5, false, 'Coding'];
   console.log(ourTuple);
  
   //TypeScript Object Types
   const car: { type: string, model: string, year: number } = {
     type: "Toyota",
     model: "Corolla",
     year: 2024
   };
   console.log(car);
  
   //TypeScript Enums  
   enum CardinalDirections {
     North,  //0
     East,   //1
     South,  //2
     West    //3
   };           
   let currentDirection = CardinalDirections.North;
   console.log(currentDirection);
  
   //TypeScript Functions
   function printHello(): void {
     console.log('Hello!');
   }
   printHello();
  
   //TypeScript Casting with as
   let x: unknown = 'hello'; // 5 ký tự
   console.log((x as string).length);
  
   //TypeScript Classes
   class Person {
    name: string;
   }      
   const person = new Person();
   person.name = "Jane";
   console.log(person);
  
});
