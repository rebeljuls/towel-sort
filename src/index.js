
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let sum;
 
  if ((matrix == 0) || (matrix == undefined)) {
    return arr;
}


for (let i = 0; i < matrix.length; i ++) {
   
    for (let j = 0; j < matrix[i].length; j++) {
        sum = 0;
        let colum = i%2 === 0 ? j : (matrix[i].length - j - 1);
    sum += matrix[i][colum];

    arr.push(sum);
     
} }
//if (i%2 != 0) {
      // matrix[i].sort((a,b) => b-a);
  // }
 //  matrix[i].sort((a,b) => a-b);
return arr;

 

//return matrix.length == 0 ? arr : arr.flatMap(i%2 == 0 => matrix[i].sort((a,b) => b-a));

}


//for (let i = 0; i < arr.length; i ++) {
   // if (arr.length === 0 ? newarr : i%2 === 0 arr[i].sort(a,b) => b-a){ 
//return newarr;
