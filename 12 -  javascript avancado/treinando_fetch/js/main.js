const URL = 'https://rickandmortyapi.com/api/character';

async function chamarApi() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json();
        console.log(obj[0]);
    }
}

chamarApi();