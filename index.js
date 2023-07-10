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
    return generatePossibleSets(fillMissing(getUniqueSet(astronaut), n)).length
    
}


function getUniqueSet(arr){
    let common = []

    while(arr.length){
        let tuple = arr.pop()
        
        if(common.length === 0) common.push(tuple)
        else {
            let found = false
            for(let i = 0; i < common.length; i++){
                if(common[i].includes(tuple[0])){
                    common[i].push(tuple[1])
                    found = true
                }
                else if(common[i].includes(tuple[1])){
                    common[i].push(tuple[0])
                    found = true
                }
            }
            
            if(!found) common.push(tuple)
        }
    }
    return common
}

function fillMissing(arr, n){
    if(n < arr.length * 2){
        return arr
    } else {
        let flattend = arr.flat()
        let astros = []
        for( let i = 0; i < n; i++){
            if(!flattend.includes(i))
                astros.push([i])
        }
        
        return arr.concat(astros)
    }
    
}

function generatePossibleSets(t){
    let result = []
    for(let i = 0; i< t.length -1; i++){
        for(let j = 0; j< t[i].length; j++){
            for(let k = i+1; k < t.length; k++){
                for(let l = 0; l < t[k].length; l++){
                    result.push([t[i][j], t[k][l]])
                }
            }
        }
    }
    return result
}
