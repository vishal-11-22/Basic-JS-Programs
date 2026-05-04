num=153;
s=0;
while(num)
{
    s+=num%10;
    num=Math.floor(num/10);

}
console.log(s);