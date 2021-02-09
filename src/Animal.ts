export class Animal {
  
   private name : string;
    constructor(name: string) {
      this.name = name;
  }
      eat(food : string) {
        console.log( this.name + "eats" + food);
        return food;
      }
  
      sound (sound: string) : string{
        console.log ("the sound ...");
        return sound;
      }
    }
    
    export class Dog extends Animal {
      constructor(name:string){
        super(name);
    }

    sound(bark: string): string{
        console.log("Dog barks");
        return bark;
    }
}
    
    export class Cat extends Animal{
      constructor(name:string){
        super(name);
    }
    sound(meow: string): string{
        console.log("Cat meows");
        return meow;
    }
}