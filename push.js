// function findKnownElements(){
//   var missingElements;
//   var possibleArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   var knownArray = ['1', '5', '8', '2', '6', '.', '.', '.', '.'];
//   for(var i = 0; i<knownArray.length; i++){
//     if(knownArray[i] !== '.'){
//       missingElements = knownArray.map(knownArray[i]);
//     }
//   }
//   return missingElements;
// };

var arr = ['1', '2', '3', '.', '.'];
for(var i = 0; i<6; i++){
	if(arr[i] === '.'){
		arr.pop(arr[i]);
	}
}
console.log(arr);