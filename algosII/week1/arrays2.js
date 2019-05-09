// Array: Average (Warmup) (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

function arrayAverage1(arr) {
    if(!arr) {
        throw "Invalid input"
    }
    let count = 0;
    let sum = 0;
    arr.foreach(el=>count+=el,sum++)
    return sum/count
}

const arrayAverage2 = (arr) => arr.reduce((tot,cur)=>tot+cur,0)/arr.length

// o Balance Point Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false. 

function balancePoint(arr) {
    let right = 0;
    let left = 0;
    let idx = 0;
    arr.foreach(val=>right+=val)
    while(idx<arr.length) {
        if(left==right){
            break;              //written this way for 1 exit...
        }
        left+=arr[i];
        right-=arr[i];
        idx++;
    }
    return left===right;
}

// o Balance Index Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [2,5,7,0,3] → 2, but [9,9] → -1.
function balanceIndex(arr) {
    // this assumes p clean input...
    let idx = left = right = 0; // style-wise, is this good? I imagine not beacuse clarity or maintenance? does it scope them same?
    arr.foreach(val => right+=val);
    right-=arr[0];
    while(idx<arr.length) {
        if(left==right) {
            return idx;
        }
        left+=arr[idx];
        right-=arr[idx];
        idx++;
    }
    return -1;
}

// o Taco Truck Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance is 25 (8+13+4).    

const median = (arr) => arr.sort()[Math.floor(arr.length/2)]

function TacoTruck(coordinateArray) {
    return [median(coordinateArray.map(coord => coord[0])), median(coordinateArray.map(coord => coord[1]))]
}
 
 
// o Array: Binary Search Given sorted array and value, return whether array contains it. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that array is sorted. Don’t use built-in funcs.  

function binarySort(arr) {
    // check edge cases...
    let left = 0, right = 0;
    while()
}
 
// o Min of Sorted-Rotated You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don’t use built-in functions (surprise!). Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], you should return "Anna". Remember, do not iterate the array linearly! 
 
// o String: Binary Search You will be given a very long string and a single character. Return whether that character is present in the string. Note: the characters in the string have been arranged so that the charCodeAt() values for each character are monotonically ascending from the beginning of the string to the back. Use the fact that the string is effectively sorted. Don’t use built-in functions. Note: characters may not be exactly as you might have considered ‘alphabetized’, but char.charCodeAt() works well. Example: if your function is given the inputs (" &-0379DEFXZ[abcz|", "6"), it should return false. If instead it is sent (" &-0379DEFXZ[abcz|", "c"), return true. Remember, don’t iterate the string linearly!    

 

// o Array: Flatten Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4].  
 
// Second: work ‘in-place’ in the given array (do not create another). Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2].  
 
// Third: make your algorithm both in-place and stable. Do you need a return value?  
// o Array: Remove Duplicates Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). For [1,2,1,3,4,2] return [1,2,3,4].  
 
// Second: work ‘in-place’ in given array. Alter order if needed (stability is not required). Ex.: [1,2,1,3,4,2] could become [1,2,4,3].  
 
// Third: make it in-place and stable.  
 
// Fourth: eliminate any second (inner) loop. 
// o Array: Mode Back in the Basic 13, you wrote code to compute an array’s minimum and maximum values. You also wrote code to determine average value (the “mean”). What about the “mode” – the most common value in that data set. Create a function that, given an array, returns the most frequent value in the array.  
 
// Second: memory constraints prevent your using a new array. How does this affect your solution?  
 
// o Array: Buffer Copy Create arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals) to copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc.  
//  Second: do not lengthen destArr, nor read off the end of sourceArr – for both arrays, if you reach an array’s end you should “wrap around” to continue writing/reading at the beginning of the array.  
//  Third: if numVals > destArr.length, only copy the minimum needed amount.  
//  Fourth: sourceArr can now be the same array as destArr! Only handle the non-wrap case. That is, you can assume that you won’t need to read beyond arr.length. You can extend the array on writes.  
//  Fifth: if you made it this far, good job! Now for a real challenge: handle all possible cases where sourceArr and destArr are the same array, including wraparound, not overwriting original array data prematurely, and copying in-place. If arr.length is 100, how would you handle significant wraparound and overwriting, such as arrBufferCopy(arr,arr,30,80,95)?   

// o Smarter Sum Use time-space tradeoff to accelerate average running time for iSigma(num) that returns sum of integers from 1 to num. Recall iSigma(1)=1, iSigma(2)=3, iSigma(3)=6, iSigma(4)=10.  
 
// o Faster Factorial Remember Factorial(num)? It returned the product of positive integers from 1 to num. Examples: Factorial(1) = 1, Factorial(2) = 2, Factorial(3) = 6. For these purposes, Factorial(0) = 1. Recreate this function, but use a time-space tradeoff to accelerate the average running time.  
 
// o Fancy Fibonacci Use time-space tradeoff to accelerate running time of iFib(num) that returns numth number in the Fibonacci sequence. Recall iFib(0)=0, iFib(1)=1, iFib(2)=1, iFib(3)=2.  
 
// o Tricky Tribonacci Why stop with fibonacci? Create a function to retrieve a “tribonacci” number: the sum of the previous 3 values. Tribonaccis are { 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, ... }. Again, use a timespace tradeoff to make it fast.    

 
// o Median of Sorted Arrays Given two arrays that are sorted but not necessarily the same length, find the median value. Given ([1,5,9], [1,2,3,4,5,6]), return 4. If the number of values is even, return the average of the two middle values. Given ([1,5,9], [1,2,3,4,5]), return 3.5.  
 
// Second: accept three arrays instead of two.  Third: handle an arbitrary number of arrays.  
// o Time to English You are given an integer representing the number of minutes that have elapsed since midnight. You should return a string representing the current time, in traditional spoken convention. Use numerals, except specifically the following words – midnight, noon, past, til, half, quarter. Examples: if given 30, return "half past midnight". If given 75, return "quarter past 1 am". If given 710, return "10 til noon". If given 1000, return "20 til 5 pm".  
 
// o Missing Value You are given an array of length N that contains, in no particular order, integers from 0 to N. One integer value is missing. Quickly determine and return the missing value. Given ([3,0,1]), return 2. 
//  Second: now the lowest value can now be any integer (including negatives), instead of always being 0. Given ([2,-4,0,-3,-2,1]) return -1. Given ([5,2,7,8,4,9,3]), return 6.  
 
// o Rain Terraces The Seattle Coding Dojo wants to send excess water to the Burbank Coding Dojo, so it landscapes its rooftop with a set of unusual elevated terraces. The terraces are all the same width, but have varying heights. When it rains, water gathers in the low terraces that are surrounded by taller ones. For example, if we have terraces with heights [3,1,1,4,2], then as much as 4 units of water could be gathered, because water would pool 2-deep on two different terraces (both of the 1-high terraces: between the 3-high and 4-high terraces). Water on the other terraces just runs off the sides. Given an array of terrace heights, return the maximum amount of water that is trapped when rains come.   
// in      left    out      
// 31142   33344   33342   
// 24113   24443   24333   
// 1241131 1244444 1243331 
// 1311421 1333444 1333421 

// function rainTerrace(arr) {
//     // trim sloppy sides off
//     let leftEdge = 0;
//     while(arr[leftEdge]<=arr[leftEdge+1]) {
//         leftEdge++;
//     }
//     let rightEdge = arr.length-1;
//     while(arr[rightEdge]<=arr[rightEdge-1]) {
//         rightEdge--;
//     }
//     // let heights = arr.slice();
//     let curHeight = arr[0];
//     // calc left edge
//     for(let i = 0; i<arr.length; i++) {
//         heights[i] = curHeight >= arr[i] ? curHeight : arr[i];
//         curHeight = heights[i];
//     }
//     // cal right edge
//     for(let i = arr.length-1;i>=0;i--) {
//         heights[i] = arr[i]<=curHeight?arr[i]:curHeight;
//         curHeight = hieghts[i];
//     }
// }

  
// o Last Digit of A to the B Modern computers can handle very large numbers, but they do have their limits. A number that is repeatedly multiplied by itself will eventually exceeds a computer’s ability to accurately represent it. (Note: the number of times it is multiplied by itself is called an exponent.) For an optional end-of-chapter challenge, determine the smallest (least significant) digit of a number that is potentially very, very large. You may find that you must do this without computing the actual (unimaginably large) number.  
//  Implement a function lastDigitAtoB(a,b) that accepts two non-negative integers. It should return the last digit of a number found by raising the first number (a) to an exponent of the second number (b). Examples: given (3,4), you should return 1 (3 * 3 * 3 * 3 is 81, whose last digit is 1). Given (12,5), return 2 (which is the least significant digit of 248832: 12 * 12 * 12 * 12 * 12). How high can you scale your solution? For example, what is the return value for (237,124)? o Matrix Search Mike digs image recognition and wants to create a JavaScript Imaging Library, just like PIL for Python. He is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each twodimensional array represents a gray-scale image, where each integer value is a pixel. The second image might be found somewhere within the larger one. Return whether it is.  
//  Given array: [[12,34,45,56],   and array: [[67,78],  return true.     [98,87,76,65],     [43,32]]     [56,67,78,89],     [54,43,32,21]] 
 
// o Max of Subarray Sums Given a numerical array that is potentially very long, return the maximum sum of values from a subarray. Any consecutive sequence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays. Given [1,2,-4,3,-2,3,-1], you should return 