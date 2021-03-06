const createRandomSeed = require('./seedSetup');
const timer = require('./timer');

// 'acorn' seed initial start
const acorn = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];
console.log(`Acorn grid 200 * 200, ms for 2400 frames : ${timer(acorn, 200, 200, 2400)}`);
// ~ 2400 cycles per second on 'acorn', 7 initial seed cells

// for randomly populated test, emulate a large grid of live cells 1000 * 1000
const randomG = (createRandomSeed(1000, 1000));
// large 1000 x 1000 grid ~ 1000ms on my machine for 5 cycles, not including draw function
console.log(`Large 1000 * 1000 randomly populated grid, 7000ms for 5 frames : ${timer(randomG, 1000, 1000, 5)}`);

// smaller 200 * 200 random cells
const randomG2 = (createRandomSeed(200, 200));
// smaller 200 * 200 random grid ~ 1000ms on my machine for 50 cycles, not including draw func
console.log(`200 * 200 random grid, 1000ms for 50 frames : ${timer(randomG2, 200, 200, 50)}`);


//  ----------- observations ---------------  //
/*
For small seed input very fast irrespective of size of World. For large World, ~ 500,000 live
cells, algorithm struggles

In production would count live cells size use this hashLife version to track just live cells
at lower number and swap algorithm at appropriate point
*/

module.exports = timer;
