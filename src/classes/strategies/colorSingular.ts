import { IColor } from '../../interfaces/iColor';

export class ColorSingular implements IColor {
  color(color: string): string {
    return color
  }
}