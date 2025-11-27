function walkDogs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true
            if(dogWalked) {
                resolve('You walk the dog 🐕')
            } else {
                reject("You DID'NT walk the dog")
            }
        }, 1500);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true

            if(kitchenCleaned) {
                resolve('You clean the kitchen 🍲')
            } else {
                reject('You did not clean the kitchen')
            }
        },1500)
    })
}

async function doChores() {
    
    const walkDogsResult = await walkDogs()
    console.log(walkDogsResult);

    const cleanKitchenResult = await cleanKitchen()
    console.log(cleanKitchenResult);
    
    
}

doChores()

console.log('nesse momento o programa nao parou por conta do async. ele continua');
