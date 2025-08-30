// src/generators/horse.ts
import { roller } from "./randomizer"
import { weights } from "./weights"
export type coat ={
    baseCoat:string
    coatVariety:string
    mark:string
    socks:string
}
export type temperament ={
    temperment:string
    lazy:boolean
    bites:boolean
}
export type horse ={
    coat:coat
    temperament:temperament
    quirk:string
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
export const getTemperament =(): temperament =>{
    let tempRoll = roller(10) || 1
    let temperament:temperament = {temperment:'',lazy:false,bites:false}
    if(tempRoll == 1){
        temperament.temperment = 'Bomb Proof'
    }
    if(tempRoll == 10){
        temperament.temperment = 'Crazy'
    }
    if(tempRoll <= 5){
        let lazyRoll = roller(20) || 1
        if(lazyRoll >= 14){
            temperament.lazy = true
        }
        else{
            temperament.lazy = false
        }
    }
    if(tempRoll >= 8){
        let biteRoll = roller(20) || 1
        if(biteRoll <= 5){
            temperament.bites = true
        }
        else{
            temperament.bites = false
        }
    }
    return temperament
}
export const getQuirk =(temperament:temperament): string =>{
    let quirkRoll = roller(20) || 1
    let quirk:string = ''
    switch(quirkRoll){
        case 1:
            if(temperament.bites == true){
                quirk = 'Ripe Hellion.'
            }
            else{
                quirk = 'Perfect People Pleaser.'
            }
            break
        case 2:
            quirk = 'Follows Well, and keeps up with others. Doesn\'t lead well.'
            break
        case 3:
            quirk = 'wanders off immediately.'
            break
        case 4:
            quirk = 'Likes to stick out tongue even when trotting.'
            break
        case 5:
            quirk = 'Stands still lead by rope, or reigns are in mouth but constantly fidgets if tied.'
            break
        case 6:
            quirk = 'Whinnies shrilly every morning.'
            break
        case 7:
            quirk = 'Starts to walk as soon as rider is off the ground.'
            break
        case 8:
            quirk = 'Leaves trail to spash in puddles. Loves water!'
            break
        case 9:
            quirk = 'Loves scratches between the ears.'
            break
        case 10:
            quirk = 'Loves butt scratches.'
            break
        case 11:
            quirk = 'Likes to lick faberic.'
            break
        case 12:
            let roll = roller(2) || 1
            if(roll == 1){
                quirk = 'Able to open stall doors, but doesn\'t leave.'
            }
            else{
                quirk = 'Able to open stall doors, and will wander.'
            }
            break
        case 13:
            roll = roller(2) || 1
            if(roll == 1){
                quirk = 'Able to untie knots, but doesn\'t leave.'
            }
            else{
                quirk = 'Able to untie knots, and will wander.'
            }
            break
        case 14:
            quirk = 'Is very curious, and will investigate what is going on. This will lead to it getting in the way.'
            break
        case 15:
            quirk = 'Very curious, will watch everything without investigating'
            break
        case 16:
            quirk = 'Constantly snacks while traveling'
            break
        case 17:
            quirk = 'Won\'t move unless both of the riders feet are in stirrups. Checks for this constantly'
            break
        case 18:
            quirk = 'Constantly cuts corners on trails. Will take the lead if able.'
            break
        case 19:
            quirk = 'Will lick the entire face after recieving a treat.'
            break
        case 20:
            quirk = 'Knows tricks, including bowing, nodding, smiling, and hoof on stool.'
            break
    }
    return quirk
}
export const getHorse =(): horse =>{
    let coat:coat = getCoat()
    let temperament:temperament = getTemperament()
    let quirk:string = getQuirk(temperament)
    let horse:horse = {
        coat:coat,
        temperament:temperament,
        quirk:quirk
    }
    return horse
}
export const getHerd =(horses:number): void =>{
    let i = 0
    while(i<horses){
        let  coat = getCoat()
        console.log(`You ride a ${coat.baseCoat} horse of the ${coat.coatVariety} variety, with a ${coat.mark} with ${coat.socks} socks`)
        i++
    }
}
export async function generateHorse(): Promise<string> {
    let horse:horse = getHorse()
    let horseCoat:string
    if(horse.coat.baseCoat == horse.coat.coatVariety){
        horseCoat = `🐴 You ride a horse with a ${horse.coat.coatVariety} coat.`
    }
    else{
        horseCoat = `🐴 You ride a ${horse.coat.baseCoat} horse with a ${horse.coat.coatVariety} coat.`
    }
    let socksText = horse.coat.socks == 'No ' || 'No Socks' ? '' : `It has ${horse.coat.socks} sock(s).`
    let markText = horse.coat.mark == 'No Mark' ? '' : `It has a ${horse.coat.mark}.`
    let temperText = horse.temperament.temperment == '' ? '': `Its temperament is ${horse.temperament.temperment}.`
    let biteText = horse.temperament.bites == true ? 'It bites!' : ''
    let lazyText = horse.temperament.lazy == true ? 'It is lazy.' : ''
    return `${horseCoat} ${socksText} ${markText} ${temperText} ${biteText} ${lazyText} Its quirk is: ${horse.quirk}`
}