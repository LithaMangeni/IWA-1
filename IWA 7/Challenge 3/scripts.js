const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const toatalBalance = Math.abs(parseInt(leoBalance) + parseFloat(sarahBalance))
const owed = 'R' + toatalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const leoAmount = Math.abs(leoBalance).toFixed(2)
const sarahAmount = Math.abs(sarahBalance).toFixed(2)
const leo = `${leoName}  ${leoSurname}(Owed : R ${leoAmount})`
const sarah = `\n${sarahName} ${sarahSurname} (Owed :R ${sarahAmount})`
const total = "\nTotal amount owed: "
const result = leo + sarah + "\n" + divider + total  + owed + "\n" + divider

console.log(result)