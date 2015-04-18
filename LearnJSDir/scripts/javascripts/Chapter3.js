/**
 * Created by Sruthi on 4/14/15.
 */
//Chapter 3
/*
//Problem 1
function min(num1,num2){
  if (num1<num2)
    return num1;
  else
    return num2;
};

console.log(min(4,3))*/

//Problem 2
//function countBs (pstring){
//  var count =0;
//  for (var i =0; i< pstring.length;i++){
//    if (pstring.charAt(i)==='B')
//       count ++;
//  };
//  return count;
//};

function countChar (pString, pChar){
  var count =0;
  for (var i =0; i< pString.length;i++){
    if (pString.charAt(i)=== pChar)
      count ++;
  };
  return count;
};

function countBs (pString){
  var count=0;
  count = countChar(pString, "B");
  return count;
};

console.log(countBs("tsing this B"))