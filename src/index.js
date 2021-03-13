module.exports = function toReadable(number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  let dozen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = ['hundred'];
  let numToArr = Array.from(String(number), Number);
  if (number < 20) { return units[number] }
  else if (numToArr.length === 2 && number % 10 === 0) { return dozen[numToArr[0]] }
  else if (numToArr.length === 2 && number % 10 !== 0) { return dozen[numToArr[0]]+ ' ' + units[numToArr[1]]}
  else if (numToArr.length === 3 && number % 100 === 0) { return units[numToArr[0]]+ ' ' + hundreds[0] }
  else if (numToArr.length === 3 && number % 100 !== 0 && numToArr[1]<2) { return units[numToArr[0]]+ ' ' + hundreds[0]+ ' '+ units[+numToArr.splice(1,2).join('')] }
  else if (numToArr.length === 3 && number % 100 !== 0 && numToArr[2]===0) { return units[numToArr[0]]+ ' ' + hundreds[0]+ ' '+ dozen[+numToArr.splice(1,1).join('')] }
  else if (numToArr.length === 3 && number % 100 !== 0) { return units[numToArr[0]] + ' ' + hundreds[0] + ' ' + dozen[numToArr[1]] + ' ' + units[numToArr[2]] }
}
