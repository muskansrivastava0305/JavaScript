// let string = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi']

// // Print original string array
// //console.log('Original String')
// console.log(string)

// // // Use sort() method to sort the strings
// string.sort()

// // // Print sorted string array
// console.log(string)
/*++++++++++++++++++++shorting with loop++++++++++++++++++++++++++++*/

function string_sort (str) {
    let i = 0,
      j
    while (i < str.length) {
      j = i + 1
      while (j < str.length) {
        if (str[j] < str[i]) {
          let temp = str[i]
          str[i] = str[j]
          str[j] = temp
        }
        j++
      }
      i++
    }
  }
  
  
  // Original string
  let string = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi']
  
  // Print original string array
  console.log('Original String')
  console.log(string)
  
  // Call string_sort method
  string_sort(string)
  
  console.log('After sorting')
  
  // Print sorted string array
  console.log(string)

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

  