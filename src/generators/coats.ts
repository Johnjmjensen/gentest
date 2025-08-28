interface coatData {
    coatName:string
    varieties:string[]
    mark:string[]
}
interface coatsData {
    coats:coatData[]
    socks:string[]
}
export const coats:coatsData = {
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