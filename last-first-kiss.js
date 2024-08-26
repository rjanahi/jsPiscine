function first(fc){
    return fc[0]
}

function last(lc){
    return lc[lc.length-1]
}

function kiss(arr){
    let array = [last(arr),first(arr)]
    return array
}
