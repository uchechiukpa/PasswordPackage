var swap = function (iIndex, jIndex, array) {
    var temp = array[iIndex];
    array[iIndex] = array[jIndex];
    array[jIndex] = temp;
};
export var shuffle = function (array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * i + 1);
        // console.log('i', i, 'j', j, 'array', array)
        swap(i, j, array);
    }
    return array;
};
//# sourceMappingURL=shuffle.js.map