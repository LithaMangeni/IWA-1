// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [ firstLabel, firstList ] = data.lists[0];
const [ secondLabel, secondList ] = data.lists[1];
const [ thirdLabel, thirdList ] = data.lists[2];

const result = []

const extractBiggest = () => {
	const firstLast = firstList[firstList.length - 1];
	const secondLast = secondList[secondList.length-1];
	const thirdLast = thirdList[thirdList.length-1];

	if (firstLast >= secondLast && firstLast >= thirdLast) {
		firstList.pop();
		return firstLast;
	}else if(secondLast >= thirdLast) {
		secondList.pop();
		return secondLast;
	}else {
		thirdList.pop();
		return thirdLast;
	}
	
	
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)