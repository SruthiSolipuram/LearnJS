/*Created by Sruthi on 4/15/15.*/
/*
//Problem 1
function SumNumbers(numArray){
    var sum=0;
    numArray.forEach( function (num){
       sum +=num;
    });
    return sum;
};

console.log( SumNumbers([1,2,3]));

function sum(start,end,range) {
    var arr = [];
    var len = ( Math.abs(end-start) +1)/Math.abs(range);
    console.log(len)
    for (var i=0;i<len;i++){
         if (i===0) arr.push(start);
        else arr.push(arr[i-1]+range);
        console.log(arr[i])
    }
    return arr;
}

function sumArray(parr){
    var x =0;
    for (i=0;i<=parr.length-1;i++)
    x+=parr[i];
    return x;
}

console.log(sum(5,2,-1))

console.log(sumArray(sum(1,10,2)))*/

/*
//Problem 2
//console.log([1,2,3].reverse());
var Arr=[1,2,3,4,5];

function reverseArray(pArr){
    var result =[];
    for (var i=0; i<pArr.length;i++){
        result[pArr.length-i-1]=pArr[i];
    };
    return result;
}

console.log(reverseArray(Arr));

console.log(Arr);

function reverseArrayInPlace(pArr){
    var result =0;
    for (var i=0; i<pArr.length/2;i++){
        result =0;
        result=pArr[pArr.length-i-1];
        pArr[pArr.length-i-1]=pArr[i];
        pArr[i]=result;
        console.log(result,pArr[pArr.length-i-1],pArr[i]);
    };
    return pArr;
}

console.log(reverseArrayInPlace(Arr));

console.log(Arr);
*/



/*
//Problem 3
/!*
function arrayToList(pArr){
    var depth =0;
    //console.log(pArr.length);
     function addToList(depth){
       if (depth === pArr.length) return null;
       depth++;
//       console.log(depth);
       return {
               value: pArr[depth-1],
                rest: addToList(depth)
           };
     }
    return addToList(0);
};

function listToArray(pList){
    var result =[];
    function addToArray(item){
        //console.log(item.rest);
        if (item.rest === null) return result.push(item.value);
        result.push(item.value);
        addToArray(item.rest);
    };
    addToArray(pList);
    return result;
}
*!/

/!*

 function arrayToList(pArr) {
     var list = null;
     for (var i = pArr.length - 1; i >= 0; i--)
         list = {value: pArr[i], rest: list};
     return list;
 };

 function listToArray(pList){
    var result =[];
    for (var i = pList; i; i= i.rest)
        result.push(i.value);
    return result;
 }

console.log(arrayToList([11,12,13,14,15]));

console.log(listToArray(arrayToList([11,12,13,14,15])));

console.log(listToArray(
   { value: 11,
        rest: { value: 12, rest: { value: 13, rest: { value: 14, rest: { value: 15, rest: null } } } }}));
*!/


function prepend(pNumber, pList){
    return {value: pNumber, rest: pList};
    }

function nth (pList, pNumber) {
    var n = 0;
    for (var node = pList; node; node = node.rest){
        if (n==pNumber) {
            if (!node) return undefined;
            else return node.value;
        };
        n++;
    };
};

//function nth(list, n) {
//    if (!list)
//        return undefined;
//    else if (n == 0)
//        return list.value;
//    else
//        return nth(list.rest, n - 1);
//}

console.log(prepend(30,
    { value: 11,
        rest: { value: 12, rest: { value: 13, rest: { value: 14, rest: { value: 15, rest: null } } } }}));

console.log(nth(
    { value: 11,
        rest: { value: 12, rest: { value: 13, rest: { value: 14, rest: { value: 15, rest: null } } } }},3));
*/

//Problem 4
function deepEqual (pObj1,pObj2){

};


