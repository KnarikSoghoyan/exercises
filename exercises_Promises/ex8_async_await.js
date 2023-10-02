// Create a function that returns a Promise with a delayed resolution 
// (e.g., using setTimeout). Then, use async/await to call this function
// and log the result when it's resolved.


function dif (num1, num2) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			if (num1 > num2) {
				resolve(num1-num2)
			} else {
				reject ("second number is bigger")
			}
			
		},1000)
	})
};

async function myFunc (){
	try{
		let res = await dif(10,4)
		console.log(res);
	} catch(err){
		console.log(err);
	}
	
};  
myFunc()
