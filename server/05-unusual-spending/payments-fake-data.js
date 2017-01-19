const payments = [[
    {amount: 90, category: 'golf'},
    {amount: 490, category: 'tennis'},
    {amount: 90, category: 'golf'},
    {amount: 90, category: 'golf'},
    {amount: 490, category: 'tennis'},
    {amount: 390, category: 'basketball'},
    {amount: 290, category: 'bicycling'},
    {amount: 190, category: 'chess'}
  ], [
    {amount: 90, category: 'golf'},
    {amount: 490, category: 'tennis'},
    {amount: 390, category: 'basketball'},
    {amount: 290, category: 'bicycling'},
    {amount: 90, category: 'golf'},
    {amount: 490, category: 'tennis'},
    {amount: 390, category: 'basketball'}
]];

const currentMonth = {year: 2016, month: 12};
const priorMonth = {year: 2016, month: 11};

const categorizedPayments = [{
  month: currentMonth,
  payments: [
    {amount: 270, category: 'golf'},
    {amount: 980, category: 'tennis'},
    {amount: 390, category: 'basketball'},
    {amount: 290, category: 'bicycling'},
    {amount: 190, category: 'chess'}
  ]}, {
  month: priorMonth,
  payments: [
    {amount: 180, category: 'golf'},
    {amount: 980, category: 'tennis'},
    {amount: 780, category: 'basketball'},
    {amount: 290, category: 'bicycling'}
  ]}
];

export {payments, categorizedPayments, currentMonth, priorMonth};
