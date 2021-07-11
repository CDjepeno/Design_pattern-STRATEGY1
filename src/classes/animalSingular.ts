import { IAnimal } from '../interfaces/iAnimal';

export class AnimalSingular implements IAnimal {
  animal(animal: string) {
    return animal
  }
}