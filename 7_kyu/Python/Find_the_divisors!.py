def divisors(integer):
    divisors = []
    for x in range(2,integer):
        if(integer%x==0):
            divisors.append(x)
    if(len(divisors)==0):
        return f"{integer} is prime"
    else:
        return divisors

# Link => https://www.codewars.com/kata/544aed4c4a30184e960010f4/python