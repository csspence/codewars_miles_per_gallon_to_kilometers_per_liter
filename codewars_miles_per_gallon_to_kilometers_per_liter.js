/*
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/

const converter = (mpg) => {
  let kpl = Number.parseFloat(mpg / 2.82485876).toFixed(2)
  let str = kpl.toString();
  if(str[str.length-1] === '0' && str[str.length-2] === '0') {
    kpl = mpg / 2.82485876;
  } else if(str[str.length-1] === '0') {
    kpl = Number.parseFloat(mpg / 2.82485876).toFixed(1);
  }
  return Number(kpl);
}