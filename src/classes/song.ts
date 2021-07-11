import { IColor } from '../interfaces/iColor';
import { Isize } from '../interfaces/iSize';
import { IAnimal } from '../interfaces/iAnimal';

export class Song {
  sizePlural: Isize
  sizeSingular: Isize
  animalSingular: IAnimal
  animalPlural: IAnimal
  colorSingular: IColor
  colorPlural: IColor


  constructor(
    sizePlural: Isize,
    sizeSingular: Isize,
    animalSingular: IAnimal,
    animalPlural: IAnimal,
    colorSingular: IColor,
    colorPlural: IColor
  ) {
    this.sizePlural = sizePlural
    this.sizeSingular = sizeSingular
    this.animalSingular = animalSingular
    this.animalPlural = animalPlural
    this.colorSingular = colorSingular
    this.colorPlural = colorPlural
  }

  sizeAnimalColorSingular(animal: string, color: string) {
    return `${this.sizeSingular.size()} ${this.animalSingular.animal(animal)} ${this.colorSingular.color(color)}`
  }

  sizeAnimalColorPlural(animal: string, color: string) {
    return `${this.sizePlural.size()} ${this.animalPlural.animal(animal)} ${this.colorPlural.color(color)}`
  }

  allVersetSwitch(n: number):string {
    let versets = "";

    switch (n) {
      case 1:
        versets += `${n} ${this.sizeAnimalColorSingular('lapin', 'blancs')} sautant sur le chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('lapin', 'blanc')}
        ${n + 1} ${this.sizeAnimalColorPlural('lapins', 'blancs')} sont devenus copains.\n`;
        break;

      case 3:
        versets += `${n} ${this.sizeAnimalColorPlural('lions', 'blancs')}  sautant sur le chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('lion', 'blanc')}
        ${n + 1} ${this.sizeAnimalColorPlural('lions', 'blancs')} sont devenus copains.\n`;
        break;

      case 5:
        versets += `${n} ${this.sizeAnimalColorPlural('lapins', 'bleus')}  sautant sur le chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('lapin', 'bleu')}
        ${n + 1} ${this.sizeAnimalColorPlural('lapins', 'bleus')} sont devenus copains.\n`;
        break;

      case 6:
        versets += `${n} ${this.sizeAnimalColorPlural('oiseaux', 'blancs')}  volant au dessus du chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('oiseau', 'blanc')}
        ${n + 1} ${this.sizeAnimalColorPlural('oiseaux', 'blancs')} sont devenus copains.\n`;
        break;

      case 7:
        versets += `${n} ${this.sizeAnimalColorPlural('lapins', 'colors')}  sautant sur le chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('lapin', 'blanc')}
        ${n + 1} doigts avec mes mains, pour compter les petis lapins blancs.`;
        break;
    
      default:
        versets += `${n} ${this.sizeAnimalColorPlural('lapins', 'blancs')}  sautant sur le chemin rencontre 
        1 autre ${this.sizeAnimalColorSingular('lapin', 'blanc')}
        ${n + 1} ${this.sizeAnimalColorPlural('lapins', 'blancs')} sont devenus copains.\n`;
        break;
    }

    return versets;
  }


}

