// function odd_number(){
//     console.log(num);
//         var sum = 0;
//    for(  var i=0 ; i<num.length; i++){
//          var container = i;
//          var container2 = num[i];
//          sum = sum + container2;
//          console.log(container,container2,sum);
//    }
// }
// var num = [3,5,7,8,9];
// odd_number(num)

// function odd_number(){
//   console.log(number);
//     sum = 0;
//   for(var i=0; i<number.length; i++){
//       var nums = number[i];
//      if(nums%2==1){
//         var odd = nums;
//         sum = sum+odd
//         console.log(sum);
//      }
//   }
// }
// var number =[4,5,8,6,7,87,56,45];
// odd_number(number)


function even_numbers(nums){
  console.log(numbers);
  sum = 0;
  for(var i=0; i<numbers.length; i++){
    var num = numbers[i];
    if(num%2==0){
        sum = sum+num;
        console.log(sum);
    }
  }
  return sum;
}
var numbers = [4,5,8,6,7,87,56,45];
even_numbers(numbers)