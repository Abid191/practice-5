// function leap_year(years){
//     var arr= [];
//   for(var i=0; i<years.length; i++){
//     var count = years[i];
//     //  console.log(count);
//     if((count%4===0 && count%100!==0) || (count%400===0)){
//         arr.push(count)
//     }
//   }
//   console.log(arr);
// }
// var years = [2023,2024,2025,2028,2030];
// leap_year(years)


// function hour_mint(hour){
//     var total_mint = hour*60;
//     console.log(total_mint);

// }
// hour_mint(4)


function odd_even(nums){
    var arr = [];
  for (var i=0; i<nums.length; i++){
    var num = allnums[i];
    if (num%2===0 && num%4!==0 ||(num%7===0)){
        
        arr.push(num);
    }
  }
  console.log(arr);
}

var allnums = [10,30,45,47,28,95,75,73,38];
odd_even (allnums)