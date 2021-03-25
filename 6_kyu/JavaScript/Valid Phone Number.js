// Link: https://www.codewars.com/kata/525f47c79f2f25a4db000025

const validPhoneNumber = phoneNumber => (/^[(]{1}[1-9]{1}\d{2}[)]{1}\s{1}\d{3}[-]{1}\d{4}$/).test(phoneNumber);