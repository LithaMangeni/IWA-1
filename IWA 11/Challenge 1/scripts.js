// script.js

const order1 = document.querySelector(' [data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector('.biscuits .count');
const donuts3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

const biscuitsAmount1 = order1.getAttribute('data-biscuits');
const donutsAmount1 = order1.getAttribute('data-donuts');
const pancakesAmount1 = order1.getAttribute('data-pancakes');
const statusValue1 = order1.getAttribute('data-delivered')=== 'true' ? 'Delivered' : 'Pending';

const biscuitsAmount2 = order2.getAttribute('data-biscuits');
const donutsAmount2 = order2.getAttribute('data-donuts');
const pancakesAmount2 = order2.getAttribute('data-pancakes');
const statusValue2 = order2.getAttribute('data-delivered')=== 'true' ? 'Delivered' : 'Pending';

const biscuitsAmount3 = order3.getAttribute('data-biscuits');
const donutsAmount3 = order3.getAttribute('data-donuts');
const pancakesAmount3 = order3.getAttribute('data-pancakes');
const statusValue3 = order3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

biscuits1.innerHTML = biscuitsAmount1;
donuts1.innerHTML = donutsAmount1;
pancakes1.innerHTML = pancakesAmount1;
status1.innerHTML = statusValue1;

biscuits2.innerHTML = biscuitsAmount2;
donuts2.innerHTML = donutsAmount2;
pancakes2.innerHTML = pancakesAmount2;
status2.innerHTML = statusValue2;

biscuits3.innerHTML = biscuitsAmount3;
donuts3.innerHTML = donutsAmount3;
pancakes3.innerHTML = pancakesAmount3;
status3.innerHTML = statusValue3;
