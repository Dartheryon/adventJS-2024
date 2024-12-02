/**
 * 1. Debe recibir un array de números
 * 2. Debe retornar una nueva lista sin los duplicados
 * 3. Debe ordenar esa nueva lista ASC
 * @param gifts
 */
const prepareGifts = (gifts: number[]) => {
  if(!Array.isArray(gifts) || !gifts.every(n => typeof n === 'number')){
    throw new TypeError('The input MUST be an array of numbers')
  }
    const newList = Array.from(new Set(gifts))
    
    return newList.sort((a,b)=> a - b)
}


export default prepareGifts;