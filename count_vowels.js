const count_vowels=function(s)
{
    let vowels='AEIOUaeiou';
    let cnt=0;
    for(let i of s)
    {
        if (vowels.includes(i))
        {
            cnt+=1;
        }

    }
    return cnt;
}
console.log(count_vowels('devaendra kumar'));