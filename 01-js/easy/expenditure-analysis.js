/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// let temp = [{
//   id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// }];

// console.log(calculateTotalSpentByCategory(temp));



function calculateTotalSpentByCategory(transactions) {
  
  let categoryAndPrice = {};
    for (let i = 0;i < transactions.length; i++){
      
      if (categoryAndPrice.hasOwnProperty([transactions[i]["category"]])){
        categoryAndPrice[transactions[i]["category"]] = categoryAndPrice[transactions[i]["category"]] + transactions[i]["price"] ;
        continue;
      }
      categoryAndPrice[transactions[i]["category"]] = transactions[i]["price"];
    }
    
    let arr = [];

    for (let propt in categoryAndPrice){
      arr.push({ category: propt, totalSpent: categoryAndPrice[propt]});
    }

    return arr;

}



module.exports = calculateTotalSpentByCategory;
