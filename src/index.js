
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(matrix == undefined){
        return [];
    }

    let arr = [];
  
    for(let i = 0, k = 1; i < matrix.length; i++, k *= (-1)){
      let j = (k > 0)? 0: matrix[i].length - 1;
      for( ; j >= 0 && j < matrix[i].length; j += k){
        arr.push(matrix[i][j]);
      }
    }
  
    return arr;
}
