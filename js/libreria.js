function isPalindroma(str) {

    let lowStr = str.toLowerCase();

    let reverseStr = lowStr.split('').reverse().join(''); 
    
    return reverseStr === lowStr;
}