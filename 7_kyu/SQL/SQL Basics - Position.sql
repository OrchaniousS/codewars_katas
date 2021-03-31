-- Link: https://www.codewars.com/kata/59401e0e54a655a298000040

SELECT id,name, POSITION(',' in characteristics) AS comma FROM monsters ORDER BY comma;