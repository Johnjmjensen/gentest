// src/generators/horse.ts
import { roller } from "./randomizer"
import { weights } from "./weights"
export type coat ={
    baseCoat:string
    coatVariety:string
    mark:string
    socks:string
}
export type horse ={
    coat:coat
}
const getCoat =(): coat =>{
    interface coatData {
    coatName:string
    varieties:string[]
    mark:string[]
    }
    interface coatsData {
        coats:coatData[]
        socks:string[]
    }
    const coats:coatsData = {
        "coats": [
            {
                "coatName": "Bay",
                "varieties": [
                    "Blood Bay",
                    "Bay",
                    "Dark Bay",
                    "Golden Bay"
                ],
                "mark": [
                    "No Mark",
                    "Star",
                    "Star/Stripe",
                    "Blaze"
                ]
            },
            {
                "coatName": "Chestnut",
                "varieties": [
                    "Cremello",
                    "Chestnut",
                    "Liver Chestnut",
                    "Flax Chestnut",
                    "Flax Liver Chestnut",
                    "Palamino"
                ],
                "mark": [
                    "No Mark",
                    "Blaze",
                    "Star"
                ]
            },
            {
                "coatName": "Black",
                "varieties": [
                    "Black"
                ],
                "mark": [
                    "No Mark",
                    "Star",
                    "Blaze"
                ]
            },
            {
                "coatName": "Dun",
                "varieties": [
                    "Bay",
                    "Red",
                    "Grullo"
                ],
                "mark": [
                    "No Mark",
                    "Star"
                ]
            },
            {
                "coatName": "Roan",
                "varieties": [
                    "Bay",
                    "Red",
                    "Blue"
                ],
                "mark": [
                    "No Mark",
                    "Star",
                    "Blaze"
                ]
            },
            {
                "coatName": "Grey",
                "varieties": [
                    "Dapple Grey",
                    "Steel Dust",
                    "Flea Bitten"
                ],
                "mark": [
                    "No Mark",
                    "Star"
                ]
            },
            {
                "coatName": "Paint",
                "varieties": [
                    "Bay",
                    "Chestnut",
                    "Black",
                    "Palamino"
                ],
                "mark": []
            },
            {
                "coatName": "Tobiano",
                "varieties": [
                    "Bay",
                    "Chestnut",
                    "Black",
                    "Palamino"
                ],
                "mark": [
                    "Star",
                    "Blaze",
                    "No Mark"
                ]
            },
            {
                "coatName": "Overo",
                "varieties": [
                    "Bay",
                    "Chestnut",
                    "Black",
                    "Palamino"
                ],
                "mark": [
                    "No Mark"
                ]
            }
        ],
        "socks":[
            "No ",
            "1",
            "2",
            "3",
            "4"
        ]
    }
    // console.log(weights.weight)
    let baseCoatWeights = weights.coatWeight.find(({name}) => name === 'baseCoat') || {"name":"failed","size":0,"values":[]}
    // console.log(baseCoatWeights)
    let baseRoll = roller(baseCoatWeights.size) || 0
    let baseLookup:number = baseCoatWeights.values[baseRoll-1] || 0
    // console.log(baseRoll)
    // console.log(baseLookup)
    // console.log(coats.coats.toString())
    let baseCoat:string = coats.coats[baseLookup].coatName || 'Bay'
    // console.log(baseCoat)
    let varietyWeights = weights.coatWeight.find(({name}) => name === baseCoat) || {"name":"failed","size":0,"values":0}
    let coatVarietys = coats.coats.find(({coatName}) => coatName == baseCoat)
    let coatVariety = coatVarietys?.varieties || 'Bay'
    // console.log('coatvari',coatVariety)
    // console.log(varietyWeights)
    let varietyRoll:number = roller(varietyWeights.size)
    let varietyLookup:number = Array.isArray(varietyWeights.values) ? varietyWeights.values[varietyRoll-1] : 0
    // console.log(varietyRoll)
    // console.log(varietyLookup)
    let variety:string = coatVariety[varietyLookup]
    // console.log(variety)
    if(baseCoat == 'Paint'){
        let paitnVar = roller(2)
        if(paitnVar == 1){
            baseCoat = 'Tobiano'
        }
        else{
            baseCoat = 'Overo'
        }
    }
    let markWeights =  weights.markWeight.find(({name}) => name === baseCoat) || {"name":"failed","size":0,"values":0}
    let markRoll = roller(markWeights.size)
    let markLookup = Array.isArray(markWeights.values) ? markWeights.values[markRoll-1] : 0
    let markset = coats.coats.find(({coatName}) => coatName == baseCoat)
    let marks = markset?.mark || 'No Mark'
    let mark = marks[markLookup]
    // console.log(markRoll, "-The Roll")
    // console.log(markLookup, "-The Look up")
    let socks:string
    if(mark == 'No Mark'){
        socks = 'No Socks'
    }
    else{
        let sockWeights = weights.sockWeight.find(({name}) => name === baseCoat) || {"name":"failed","size":0,"values":[]}
        let sockRoll = roller(sockWeights.size)
        let sockLookup = Array.isArray(sockWeights.values) ? sockWeights.values[sockRoll-1] : 0
        socks = coats.socks[sockLookup]
    }
    let coat:coat = {
        baseCoat:baseCoat,
        coatVariety:variety,
        mark:mark,
        socks:socks
    }
    return coat
}

// let coat = getCoat()
// console.log(`You ride a ${coat.baseCoat} horse of the ${coat.coatVariety} variety, with a ${coat.mark}`)

export const getHerd =(horses:number): void =>{
    let i = 0
    while(i<horses){
        let  coat = getCoat()
        console.log(`You ride a ${coat.baseCoat} horse of the ${coat.coatVariety} variety, with a ${coat.mark} with ${coat.socks} socks`)
        i++
    }
}

export async function generateHorse(): Promise<string> {
  let coat:coat = await getCoat()
  return `🐴 You ride a horse with a ${coat.coatVariety} coat, a ${coat.mark} and ${coat.socks} sock(s)`
}