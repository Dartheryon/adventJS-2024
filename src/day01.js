export const prepareGifts = ( gifts = [] ) => {
  if ( !Array.isArray( gifts ) || !gifts.every( n => typeof n === 'number' ) ) {
    throw new TypeError('Debe ser un array de enteros')
  }
  const newArray = [... new Set(gifts)]
  return newArray.sort((a,b)=> a - b)
}


