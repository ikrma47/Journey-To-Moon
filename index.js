/*
 * Complete the 'journeyToMoon' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY astronaut
 */

// actual function
function journeyToMoon(n, astronaut) {
    return generatePossibleSets(fillMissing(getUniqueSet(astronaut), n))
    
}


function getUniqueSet(as){
    let res = []
    while(as.length){
        let tuple = new Set(as.pop())
        
        for(let i of tuple){
            for(let j = 0; j < as.length; j++){
                if(as[j].includes(i)){
                    as[j].forEach(v => tuple.add(v))
                    as.splice(j, 1)
                    j--
                }
            }
        }
        res.push(Array.from(tuple))
    }
    return res
}

function fillMissing(arr, n){
    let flattend = arr.flat()
    if(n <= flattend ){
        return arr
    } else {
        
        let astros = []
        for( let i = 0; i < n; i++){
            if(!flattend.includes(i))
                astros.push([i])
        }
        
        return arr.concat(astros)
    }
    
}

function generatePossibleSets(t){
    let sum = 0
    for(let i = 0; i< t.length -1; i++){
        for(let k = i+1; k < t.length; k++){
            sum += (t[i].length * t[k].length)
        }
    }
    return sum
}
