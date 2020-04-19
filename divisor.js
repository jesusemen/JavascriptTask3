
const num = [];


function divisor(para) {
for ( let i = 0; i <= para; i++) {

if (i%2 == 0){
 num.push('yu');
}

else if( i%3 == 0){
num.push('gi');//num[i] = "gi"; 

}
else if (i%5){
  num.push('oh'); //num[i] = "oh";
 
}
else if (i%2 && i%3 && i%5 == 0) {
    num.push('yu-gi-oh');//num[i] = "yu-gi-oh";
    
}
else if(i%2 && i%3 == 0){
            num.push('yu-gi'); //num[i] = "yu -gi";

}
else if (numi%2 && numi%5 == 0){
num.push('yu-oh'); //num[i] = "yu-oh";

}
else if (i%3 && i%5 == 0){
   num.push('gi-oh'); // num[i] = "gi-oh";
    
    }
    else {
      num.push(i); 
    }
 //console.log(num);

} 
console.log(num);
}
divisor(50);
