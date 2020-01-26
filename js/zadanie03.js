const bigestSumOfTwoElements = (arr) => {
    if(arr.length === 0){
        return false;
    }
    if(arr.length === 1){
        return arr[0]
    }
    let sortedArr = arr.sort();
    
    return sortedArr[arr.length - 1] + sortedArr[arr.length - 2];
  }

  console.log(bigestSumOfTwoElements([1,2,3,4])) 
  console.log(bigestSumOfTwoElements([])) 
  console.log(bigestSumOfTwoElements([76])) 
  console.log(bigestSumOfTwoElements([23,45,17,12])) 