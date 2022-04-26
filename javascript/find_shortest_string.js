function findShortestString(arr) {
  // type your code here
  // given an array of strings, return the item in the array with the shortest length
  // 1. iterate through an array
  // 2. find the items length 
  // 3. compare the length with the current shortest item's length
  // 4. if the length is shorter, update the current shortest item to be that item 
  // 5. otherwise skip 


  let short = arr[0]
  arr.map(i => {
    if (i.length < short.length){
      short=i
    }
  })

  return short 

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
