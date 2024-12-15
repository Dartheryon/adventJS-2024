/**
 * 1. Debe recibir un array de enteros
 * 2. Debe retornar una nueva lista sin duplicados
 * 3. Deben estar ordenados ASC
 */

import { describe, expect, it } from 'vitest'

import { prepareGifts } from '../src/day01.js'

describe('day01', () => {
  describe('Initial tests', () => {
    it('should return be a function', () => {
      const actual = prepareGifts
      const expected = 'function'
      expect(typeof actual).toStrictEqual(expected)
    });
    
    it('Should throw if NOT receiving an array of numbers',()=>{
      expect(()=>prepareGifts('This is not an array')).toThrow(TypeError)
    })
  })
  describe("Return's tests", ()=>{
    it.skip("Should return a new array without duplicates", ()=>{
      const actual = [3,4,4,5,2,2];
      const expected = [3,4,5,2];
      expect(prepareGifts(actual)).toStrictEqual(expected)
    })
    
    it("Should return the new Array ordered ASC",()=>{
      const sut = prepareGifts
      const actual = [3,4,4,5,2,2];
      const expected = [2,3,4,5];
      expect( sut(actual)).toStrictEqual(expected)
    })
  })
})