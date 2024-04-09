import { describe, expect, it,test } from "vitest";
import { max,trier } from "../math";

describe('max',()=>{
    it('should return the first argument if it is greater',()=>{
        expect(max(2,1)).toBe(2);
    })
    it('should return the second argument if it is greater',()=>{
        expect(max(1,2)).toBe(2);
    })
    it('should return the first argument if it is equals',()=>{
        expect(max(2,2)).toBe(2);
    })
})

test('Tri d\'un tableau vide', () => {
    const tableauVide = [];
    const resultat = trier(tableauVide);
    expect(resultat).toEqual([]);
  });
  
  test('Tri d\'un tableau avec un seul élément', () => {
    const tableauUnElement = [1];
    const resultat = trier(tableauUnElement);
    expect(resultat).toEqual([1]);
  });
  
  test('Tri d\'un tableau avec plusieurs éléments', () => {
    const tableau = [3, 1, 5, 2, 4];
    const resultat = trier(tableau);
    expect(resultat).toEqual([1, 2, 3, 4, 5]);
  });