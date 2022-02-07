

const getFirstRecipe = (userId) => {
    return {
        // _id: ObjectId('61f6c2400cd34ed08ba92c0a'),
        name: 'Mango Hot Sauce',
        createdAt: Date.now(),
        userId,
        ingToScaleId: 'btkkq',
        imgUrl: 'http://res.cloudinary.com/recipe-gen/image/upload/v1644241824/f2cgolspih5fld5wgbbj.jpg',
        instructions: 'Blend everything and cook for 30 minutes',
        ingredients: [
            {
                id: 'btkkq',
                name: 'Habanero',
                amount: 1.3,
                units: 'Kg'
            },
            {
                id: 'eGJqi',
                name: 'Mango',
                amount: 900,
                units: 'g'
            },
            {
                id: 'sa3Ja',
                name: 'Garlic',
                amount: 80,
                units: 'g'
            },
            {
                id: 'FKPhl',
                name: 'Vinegar',
                amount: 500,
                units: 'mL'
            },
            {
                id: 'MsnCU',
                name: 'Water',
                amount: 0.8,
                units: 'L'
            },
            {
                id: '490v7',
                name: 'Salt',
                amount: 1,
                units: 'tableSpoon'
            },
            {
                id: 'm5fRb',
                name: 'Maple Syrup',
                amount: 2.5,
                units: 'tableSpoon'
            }
        ]
    }
}


module.exports = {
    getFirstRecipe
}