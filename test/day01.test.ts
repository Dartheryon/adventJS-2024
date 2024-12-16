import {describe, expect, it} from 'vitest';
import prepareGifts from '../src/day01'

describe('day01', () => {
  it('It should be a function', ()=>{
    expect(typeof prepareGifts).toBe('function');
  })
  
  it('should throw if non array of numbers is received as parameter', () => {
    
    expect(()=> prepareGifts('Not an array of numbers')).toThrow(TypeError)
  });
  it('Should return a new list without duplicated numbers', ()=>{
    const arr1 = [2,3,5,6,7,7,8,9]
    expect(prepareGifts(arr1)).toStrictEqual([2,3,5,6,7,8,9])
  })
  it('Should order the new list ASC', ()=>{
    const arr2 = [3,1,2,4,4,4,5,9,7,1,8]
    expect(prepareGifts(arr2)).toStrictEqual([1,2,3,4,5,7,8,9])
  })
});