import { Result } from '../src/classes/result';

describe('test chanson', () => {
  it.only('AllVerset', () => {
    let result = new Result()
    expect(result.main()).toBe(`1 petit lapin blanc sautant sur le chemin rencontre 
    1 autre petit lapin blanc
    2 petits lapins blancs sont devenus copains.
    
    2 petits lapins blancs sautant sur le chemin rencontre 
    1 autre petit lapin blanc
    3 petits lapins blancs sont devenus copains.
    
    3 petits lions gris sautant sur le chemin rencontre 
    1 autre petit lion gris
    4 petits lions gris sont devenus copains.
    
    4 petits lapins blancs sautant sur le chemin rencontre 
    1 autre petit lapin blanc
    5 petits lapins blancs sont devenus copains.
    
    5 petits lapins bleus sautant sur le chemin rencontre 
    1 autre petit lapin bleu
    6 petits lapins bleus sont devenus copains.
    
    6 petits oiseaux blancs volant au dessus du chemin rencontre 
    1 autre petit oiseau blanc
    7 petits oiseaux blancs sont devenus copains.
    
    7 petits lapins blancs sautant sur le chemin rencontre 
    1 autre petit lapin blanc
    8 doigts avec mes mains, pour compter les petis lapins blancs.`)
  })


})
