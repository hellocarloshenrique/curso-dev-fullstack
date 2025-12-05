function walkDogs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true
            if(dogWalked) {
                resolve('You walk the dog')
            } else {
                reject("You DID'NT walk the dog")
            }
        }, 1900);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false

            if(kitchenCleaned) {
                resolve('You clean the kitchen')
            } else {
                reject('You did not clean the kitchen')
            }
        },1500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashRemoved = true

            if (trashRemoved) {
                resolve('You removed trashs')
            } else {
                reject('You did not remove trash')
            }
        }, 2500)
    })
}

async function doChores() {

    try {
        const walkDogsResult = await walkDogs()
        console.log(walkDogsResult);

        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash()
        console.log(takeOutTrashResult);
        
        console.log('You finish all the chores!');
    }
    catch(error) {
        console.error(error);
    }
}

doChores()

console.log('nesse momento o programa nao parou por conta do async. ele continua');
