import { AnimalPlural } from "./animalPlural";
import { AnimalSingular } from "./animalSingular";
import { SizePlural } from "./sizePlural";
import { SizeSingular } from "./sizeSingular";
import { ColorSingular } from "./colorSingular";
import { ColorsPlural } from "./colorPlural";
export class Result {
    main() {
        let colorsPlural = new ColorsPlural();
        let colorsSingular = new ColorSingular();
        let animalPlural = new AnimalPlural();
        let animalSingular = new AnimalSingular();
        let sizeSingular = new SizeSingular();
        let sizePlural = new SizePlural();
        let versets = "";
        for (let i = 1; i < 8; i++) {
            if (i === 1) {
                versets += `${i} ${sizeSingular.size()} ${animalSingular.animal('lapin')} ${colorsSingular.color("blanc")} sautant sur le chemin rencontre 
        1 autre petit lapin blanc
        ${i + 1} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("blancs")} sont devenus copains.\n`;
            }
            else if (i === 3) {
                versets += `${i} ${sizePlural.size()} ${animalPlural.animal('lions')} ${colorsPlural.color("gris")}  sautant sur le chemin rencontre 
            1 autre ${sizeSingular.size()} ${animalSingular.animal('lions')} ${colorsSingular.color("gris")}
            ${i + 1} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("lions")} sont devenus copains.\n`;
            }
            else if (i === 5) {
                versets += `${i} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("bleus")}  sautant sur le chemin rencontre 
            1 autre ${sizeSingular.size()} ${animalSingular.animal('lapin')} ${colorsSingular.color("bleu")}
            ${i + 1} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("bleus")} sont devenus copains.\n`;
            }
            else if (i === 6) {
                versets += `${i} ${sizePlural.size()} ${animalPlural.animal('oiseaux')} ${colorsPlural.color("blancs")}  volant au dessus du chemin rencontre 
            1 autre ${sizeSingular.size()} ${animalSingular.animal('oiseau')} ${colorsSingular.color("blanc")}
            ${i + 1} ${sizePlural.size()} ${animalPlural.animal('oiseaux')} ${colorsPlural.color("blancs")} sont devenus copains.\n`;
            }
            else if (i === 7) {
                versets += `${i} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("blancs")}  sautant sur le chemin rencontre 
            1 autre petit lapin blanc
            ${i + 1} doigts avec mes mains, pour compter les petis lapins blancs.`;
            }
            else {
                versets += `${i} ${sizePlural.size()} ${animalPlural.animal('lapins')} ${colorsPlural.color("blancs")}  sautant sur le chemin rencontre 
            1 autre petit lapin blanc
            ${i + 1} ${sizePlural.size()} ${animalPlural.animal("lapins")} ${colorsPlural.color("blancs")} sont devenus copains.\n`;
            }
        }
        return versets;
    }
}
