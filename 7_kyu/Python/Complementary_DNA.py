import re

def DNA_strand(dna):
    return dna.translate(str.maketrans('AaTtGgCc', 'TtAaCcGg'))

# Link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038