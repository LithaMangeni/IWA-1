const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name : leoName,
	balance : leoBalance,
	age : 24,
	address : {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal
	}
}

const sarah = {
	name : sarahName + sarahSurname,
	age : 62,
	balance : sarahBalance,
	address : {
		number : sarahNumber, 
		street : sarahStreet,
		postalCode : sarahPostal
	}
}
console.log(leo, leo.address.postalCode)
console.log(sarah, sarah.address.postalCode)