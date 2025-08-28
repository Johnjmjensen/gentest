interface weightShape {
        name:string,
        size:number,
        values:number[],
}
interface weights {
    coatWeight:weightShape[],
    markWeight:weightShape[],
    sockWeight:weightShape[] 
}
export const weights:weights = {
    "coatWeight": [
        {
            "name": "baseCoat",
            "size": 20,
            "values": [
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                3,
                3,
                3,
                4,
                4,
                4,
                5,
                5,
                6
            ]
        },
        {
            "name": "Bay",
            "size": 20,
            "values": [
                0,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                2,
                1,
                3
            ]
        },
        {
            "name": "Chestnut",
            "size": 20,
            "values": [
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                3,
                3,
                3,
                4,
                4,
                4,
                5
            ]
        },
        {
            "name": "Black",
            "size": 1,
            "values": [
                0
            ]
        },
        {
            "name": "Dun",
            "size": 4,
            "values": [
                0,
                0,
                1,
                2
            ]
        },
        {
            "name": "Roan",
            "size": 6,
            "values": [
                0,
                0,
                1,
                1,
                2,
                2
            ]
        },
        {
            "name": "Grey",
            "size": 4,
            "values": [
                0,
                0,
                1,
                2
            ]
        },
        {
            "name": "Paint",
            "size": 12,
            "values": [
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                3
            ]
        }
    ],
    "markWeight": [
        {
            "name": "Bay",
            "size": 4,
            "values": [
                0,
                1,
                2,
                3
            ]
        },
        {
            "name": "Chestnut",
            "size": 4,
            "values": [
                0,
                1,
                1,
                2
            ]
        },
        {
            "name": "Black",
            "size": 6,
            "values": [
                0,
                0,
                1,
                1,
                2,
                2
            ]
        },
        {
            "name": "Dun",
            "size": 6,
            "values": [
                0,
                0,
                0,
                1,
                1,
                1
            ]
        },
        {
            "name": "Roan",
            "size": 6,
            "values": [
                0,
                0,
                1,
                1,
                2,
                2
            ]
        },
        {
            "name": "Grey",
            "size": 6,
            "values": [
                0,
                0,
                0,
                0,
                0,
                1
            ]
        },
        {
            "name": "Tobiano",
            "size": 10,
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                2,
                2
            ]
        },
        {
            "name": "Overo",
            "size": 1,
            "values": [
                0
            ]
        }
    ],"sockWeight": [
        {
            "name": "Bay",
            "size": 10,
            "values": [
                0,
                0,
                0,
                4,
                4,
                4,
                2,
                2,
                3,
                1

            ]
        },
        {
            "name": "Chestnut",
            "size": 8,
            "values": [
                0,
                0,
                4,
                4,
                3,
                2,
                1
            ]
        },
        {
            "name": "Black",
            "size": 1,
            "values": [
                0
            ]
        },
        {
            "name": "Dun",
            "size": 8,
            "values": [
                0,
                0,
                0,
                0,
                1,
                2,
                3,
                4
            ]
        },
        {
            "name": "Roan",
            "size": 8,
            "values": [
                0,
                0,
                0,
                0,
                1,
                2,
                3,
                4
            ]
        },
        {
            "name": "Grey",
            "size": 10,
            "values": [
                0,
                0,
                0,
                4,
                4,
                4,
                2,
                2,
                3,
                1
            ]
        },
        {
            "name": "Tobiano",
            "size": 1,
            "values": [
                0
            ]
        },
        {
            "name": "Overo",
            "size": 10,
            "values": [
                0,
                0,
                0,
                4,
                4,
                4,
                2,
                2,
                3,
                1
            ]
        }
    ]
}