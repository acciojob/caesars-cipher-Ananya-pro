// Your Script here.

const lookup = {
  A: "D",
  B: "E",
  C: "F",
  D: "G",
  E: "H",
  F: "I",
  G: "J",
  H: "K",
  I: "L",
  J: "M",
  K: "N",
  L: "O",
  M: "P",
  N: "Q",
  O: "R",
  P: "S",
  Q: "T",
  R: "U",
  S: "V",
  T: "W",
  U: "X",
  V: "Y",
  W: "Z",
  X: "A",
  Y: "B",
  Z: "C",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  for(let i=0; i<str.lenght:i++){
		if(lookup[str[i]]==undefined){
			decodedArr.push(str[i])
 
		else decodedArr.push(lookup[str[i]])
	}
 
  return; //return decodedArr
}
 
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 
// console.log(rot13("SERR YBIR? NPPVBWBO"));
 
// Do not change this line
window.rot13 = rot13;
