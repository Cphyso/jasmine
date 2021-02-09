import { Cat } from '../src/Animal';
import { Dog } from '../src/Animal';


describe('Eat', () =>{
    let cat;
    
    beforeEach(()=>{
        cat = new Cat("Food");
    })
    it('should return that the cat eats', () =>{
        let a = expect(cat.sound("Food"))
        a.toEqual("Food")
    })
})

describe('Sound', () =>{
    let cat;
    
    beforeEach(()=>{
        cat = new Cat("Meows");
    })
    
    it('should return the sound of the cat', () =>{
        expect(cat.sound("Meows")).toEqual("Meows")
    })
})

describe('Eat', () =>{
    let dog;
    
    beforeEach(()=>{
        dog = new Dog("Food");
    })
    
    it('should return that the dog eats', () =>{
        let i: string;
       i = dog.sound("Food");
       let j=  expect(i);
       j.toEqual("Food");
    })
})

describe('Sound', () =>{
    let dog;
    
    beforeEach(()=>{
        dog = new Dog("Barks");
    })
    
    it('should return the sound of the dog', () =>{
        expect(dog.sound("Barks")).toEqual("Barks");
    })
})
