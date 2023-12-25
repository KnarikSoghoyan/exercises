function convertDateStamp(DateStamp) {
    const date = new Date(DateStamp * 1000);
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${day}-${month}`
}


module.exports = { convertDateStamp }



