import { Animal} from './Animal'

export class Home {
    
    pets: Animal[] = [];

     adoptPet(pet: Animal){
        if((this.pets.indexOf(pet)<0)){
            this.pets.push(pet);
        }else{
            throw new Error("PET ALREADY EXISTS")
        }
        }
    
    makeAllSound(){
        for (let pet of this.pets) {
            pet.sound("sound");
        }
    }
}