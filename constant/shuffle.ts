const swap  = (iIndex: number, jIndex: number, array: any[]) => {
    const temp = array[iIndex]
    array[iIndex] = array[jIndex]
    array[jIndex]= temp
}

export const shuffle = (array: any[]) => {
    for(var i = array.length-1; i >= 0; i--){
        var j = Math.floor(Math.random() *  i + 1)
        // console.log('i', i, 'j', j, 'array', array)
        swap(i, j, array)
    }
    return array
}



