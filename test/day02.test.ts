/**
 * Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
 * Cada nombre debe estar en una línea, alineado a la izquierda.
 * El marco está construido con * y tiene un borde de una línea de ancho.
 * La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1
 * espacio a cada lado.
 *
 * 
 *
 */

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

import {createFrame} from '../src/day02.ts';
import {describe, expect, it} from 'vitest';

const sut = createFrame
describe.skip('Initial tests', ()=>{
  
  it('Should be a function', ()=>{
    expect(typeof sut).toBe('function')
  })
  
  it("Should throw if no array of strings is provided",()=>{
    const actual = "Not an array"
    expect(()=>sut(actual)).toThrow(TypeError)
  })
})

describe("Inner elements", ()=>{
  
  it.skip('should return the length of the longest element in array.', () => {
    const actual: string[] = ["a","bb","ccc"]
    const expected: number = 3;
    expect(sut(actual)).toStrictEqual(expected)
  });
  
  it.skip('should return a number of "*" equals to longest + 4', () => {
    const actual: string[] = ["a","bb","ccc"]
    const expected: string = "*******"
    expect(sut(actual)).toBe(expected)
  });
  
  it.skip('should return the content and sides of frame', () => {
    const actual: string[] = ["a","bb","ccc"]
    const expected: string = "* a *\n* bb *\n* ccc *\n"
    expect(sut(actual)).toBe(expected)
  });
  
  it.skip('should append as much as spaces needed to complete the frame', () => {
    const actual: string[] = ["a","bb","ccc"]
    const expected: string = "* a   *\n* bb  *\n* ccc *\n"
    expect(sut(actual)).toStrictEqual(expected)
  });
  
  it('should return the whole frame', () => {
    const actual: string[] = ["a","bb","ccc"]
    const expected: string = "*******\n* a   *\n* bb  *\n* ccc *\n*******"
    expect(sut(actual)).toBe(expected)
  });
})
