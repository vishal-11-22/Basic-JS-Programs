function check_prime(n)
{
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}
console.log(check_prime(15));