const getRandomArbitrary =(min:number, max:number): number =>{
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}
export const d20 =(): number =>{
    const result:number = getRandomArbitrary(1,20)
    return result
}
export const d4 =(): number =>{
    const result:number = getRandomArbitrary(1,4)
    return result
}
export const roller =(size:number): number =>{
    const result:number = getRandomArbitrary(1,size)
    return result
}
export const dice ={
d20,
d4
}