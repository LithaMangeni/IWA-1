const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


console.log(holidays&&holidays[futureId]&&holidays[futureId].name || `ID ${futureId} not created yet`)

holidays[christmas].name = 'X-mas Day';
holidays[christmas].date = new Date (`25 December ${currentYear}`)
const copied = {name: 'X-mas Day', date : new Date (`25 December ${currentYear}`) }

const oldChristmasDate = new Date(`25 December ${currentYear} 13:25`)
const correctDate = copied.date
const isEarlier = correctDate < oldChristmasDate
console.log('New date is earlier:', isEarlier)
const date = copied.date.getDate();
const month = copied.date.getMonth() + 1;
const year = copied.date.getFullYear();
const wholeDay = `${date}/${month}/${year}`;

if (isEarlier === true){
    console.log('ID change:', holidays[christmas].id === copied.id)
    console.log('Name change:', copied.name)
    console.log('Date change:', wholeDay)
}
holidays[0].date = new Date (`16 December ${currentYear}`);

const firstHolidayTimestamp = Math.min(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;

console.log(`${firstDay.toString().padStart(2, '0')}/${firstMonth.toString().padStart(2, '0')}/${currentYear}`);
console.log(`${lastDay.toString().padStart(2, '0')}/${lastMonth.toString().padStart(2, '0')}/${currentYear}`);

const holidayTimestamp = (lastHolidayTimestamp - firstHolidayTimestamp + 1);
const randomHoliday = (Math.random() * holidayTimestamp) + firstHolidayTimestamp;
const randomDate = new Date (randomHoliday);
const fullDay = randomDate.getDate().toString().padStart(2,'0');
const fullMonth = (randomDate.getMonth() + 1).toString().padStart(2,'0');
const fullYear = (randomDate.getFullYear());
const fullDate = `${fullDay}/${fullMonth}/${fullYear}`;
console.log(fullDate);