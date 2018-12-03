const express = require('express');

const app = express();
const port = 5000;

// first thing to do is parse the json file
const utilityDataObject = require('./data.json');
// next  I need to create the variables I will assign the parsed JSON data to
const  yearlist = [];
const monthlist = [];
const billlist = [];
const savingslist = [];
const concatedDates = [];
const kwh = []

// now I can provide them with their needed values
for (let i=0; i<5; i++){
  yearlist.push(utilityDataObject.dates[i].year);
  monthlist.push(utilityDataObject.dates[i].month);
  billlist.push(utilityDataObject.dates[i].bill);
  kwh.push(utilityDataObject.dates[i].kwh);
  savingslist.push(utilityDataObject.dates[i].savings);
}

// I need to join the year and month so that I can use it as my dataset for the graphs
  for (let j=0; j<monthlist.length; j++) {
    concatedDates.push(monthlist[j] + '/' + yearlist[j]);
  }

// lets see if it's logging correctly now
  console.log(yearlist);
  console.log(monthlist);
  console.log(billlist);
  console.log(savingslist);
  console.log(kwh);
  console.log(concatedDates);
  /* excellent! Now I noticed that the format is a little peculiar.  It reads from most recent to least recent.
  To fix this all I need to do is a simple javascript array method
  */
  concatedDates.reverse();
  // lets test it
  console.log(concatedDates);


var test = [
  {billlist: billlist},
  {savingslist: savingslist},
  {kwh: kwh},
  {concatedDates: concatedDates}
]

console.log(test);
app.get('/api/customers', (req, res) => {
  const customers = test;
  res.json(customers);
});


app.listen(port, () => console.log(`Server started on port ${port}`));
