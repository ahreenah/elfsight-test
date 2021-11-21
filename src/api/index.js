const BACK_URL = 'https://rickandmortyapi.com/api/'

export async function characters(par){
    if(!par){
        let k = await fetch(BACK_URL+'character')
        return await k.json()
    }
    if(typeof par == "number"){
        let k = await fetch(BACK_URL+'character/'+par)
        return await k.json()
    }
    if(typeof par == "object"){
        var url = new URL(BACK_URL+"character/");
        Object.keys(par).forEach(key => url.searchParams.append(key, par[key]))
        let k = await fetch(url)
        console.log(k)
        return await k.json()
    }
}