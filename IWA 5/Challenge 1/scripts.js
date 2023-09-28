const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let location1 = 'RSA';
let customers = '1'
let currency = 'R';
let shipping = 0;

// If a user is in South Africa their shipping should be R400,
if (location1 === 'RSA') {
     shipping = 400;
    //if a user is in Namibia their shipping should be $600  
}else if (location1 === 'NAM' ){
    shipping = 600; 
    // for all other countries shipping is $800   
}else {
    shipping = 800;
}

const shoes = 300 * 2;
const toys = 100 * 6;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

// In addition to the above, if a user’s cost without shipping is equal to or more than R1000 or $60 in cost and they are based in South Africa or Namibia, then their shipping should be free.
const calcShipping = shoes + toys + shirts + batteries + pens ;


if (calcShipping >= 1000 || calcShipping >= 60 && (location1 === 'NAM' || location1 === 'RSA') && customers === '1') {
		    shipping = 0;
		}

// this is only the case if the number of customers is exactly 1, otherwise, it should show the message stored WARNING.
if (shipping === 0 && customers !== '1') {
     console.log(FREE_WARNING)
     }
//   we do not ship to North Korea and users from North Korea should receive a notice of such.
if (location1 ==='NK'){
    console.log(BANNED_WARNING)
}else{
    console.log('price', currency, calcShipping + shipping)
}


