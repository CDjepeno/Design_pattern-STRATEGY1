import { AnimalPlural } from "./strategies/animalPlural";
import { AnimalSingular } from "./strategies/animalSingular";
import { SizePlural } from "./strategies/sizePlural";
import { SizeSingular } from "./strategies/sizeSingular";
import { ColorSingular } from "./strategies/colorSingular";
import { ColorsPlural } from "./strategies/colorPlural";
import { Song } from "./song";

export class Result {
  main() {
    let colorsPlural = new ColorsPlural();
    let colorsSingular = new ColorSingular();
    let animalPlural = new AnimalPlural();
    let animalSingular = new AnimalSingular();
    let sizeSingular = new SizeSingular();
    let sizePlural = new SizePlural();

    let chanson = new Song(sizeSingular,sizePlural,animalSingular,animalPlural,colorsSingular,colorsPlural)

    let result = "";
    for (let i = 1; i < 8; i++) {
     chanson.allVersetSwitch(i)
    }
    return result;
  }
}
