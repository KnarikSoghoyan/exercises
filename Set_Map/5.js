// 5. Given an array of email addresses, use a Set to identify and log unique email addresses. 
//    This exercise simulates processing a list of user emails and ensuring there are no duplicates.
 
const emails = ['knarik.soghoyan@gmail.com', 'knarik87@rambler.ru', 'knarik.soghoyan@gmail.com'];
const uniqueEmailsSet = new Set (emails);
const uniqueEmailsArray = Array.from (uniqueEmailsSet)
// const uniqueEmailsArray = [...uniqueEmailsSet]
console.log(uniqueEmailsArray);