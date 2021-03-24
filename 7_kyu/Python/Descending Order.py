# Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
def descending_order(num):
    listNum = [*str(num)]
    listNum.sort(reverse=True)
    return int(''.join(listNum))