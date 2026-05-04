let number=153;
let answer=0;
while (number)
{
    answer=answer*10+number%10;
    number=Math.floor(number/10);

}
console.log(answer)