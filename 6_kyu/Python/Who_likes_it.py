def likes(names):
    res = len(names)
    if res>0:
        if res<=1:
            return '{} likes this'.format(names[0])
        else:
            count = 0
            for name in range(0,res+1):
                count+1
                if res == 2:
                    return '{} and {} like this'.format(names[0],names[1])
                if res == 3:
                    return '{}, {} and {} like this'.format(names[0],names[1],names[2])
                if res >= 4:
                    return '{}, {} and {} others like this'.format(names[0],names[1],res-2)
    else:
        return 'no one likes this'

# Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362