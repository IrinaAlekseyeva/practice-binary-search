function linearSearch (arr, target) {

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  let highPoint = arr.length - 1;
  let lowPoint = 0;
  let midPoint = Math.floor((highPoint + lowPoint) / 2);
  while(highPoint >= lowPoint){
    if(target === arr[midPoint]){
      return midPoint;
    } else if(target < midPoint){
      highPoint = midPoint - 1;
      midPoint = Math.floor((highPoint + lowPoint) / 2);
    } else if(target > midPoint){
      lowPoint = midPoint + 1;
      midPoint = Math.floor((highPoint + lowPoint) / 2);
    }
  }
  return -1;
}


module.exports = [linearSearch, binarySearch]