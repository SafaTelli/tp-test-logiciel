import { describe, expect, it,test,vi } from "vitest";
import { max,trier } from "../math";
  // calculator.test.ts
import { calculate } from '../calculator';

vi.mock("../match")

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



// Mocking la fonction add

// Import the necessary modules
/*import { vi, it, expect, describe } from 'vitest';
import { calculate } from '../calculator';
import { add } from '../math';

// Create a mock for the add function
vi.mock('./math', () => ({
  add: vi.fn(),
}));

// Describe the test suite
describe('calculate function', () => {
  // Test case using mock data
  it('adds two numbers', () => {
    // Mocking the add function to return a specific value
    add.mock = () => 5;

    // Test input data
    const a = 2;
    const b = 3;

    // Call the calculate function
    const result = calculate(a, b);

    // Assertion
    expect(result).toBe(5); // Expect the result to be 5
    expect(add).toHaveBeenCalledWith(a, b); // Expect add function to be called with correct arguments
  });

  // Additional test cases can be added here for edge cases, boundary conditions, etc.
});

*/

