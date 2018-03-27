const updateQuality = require('./updateQuality');

let items = [
  { name: '+5 Dexterity Vest', sellIn: 10, quality: 20 },
  { name: 'Aged Brie', sellIn: 2, quality: 0 },
  { name: 'Elixir of the Mongoose', sellIn: 5, quality: 7 },
  { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
  { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 20 },
  { name: 'Conjured Mana Cake', sellIn: 3, quality: 6 },
];

// Run the simulation

console.log('=== Welcome to the Gilded Rose ===');

for (let day = 0; day <= 10; day++) {
  console.log(`\n=== Day ${day} ===`);

  console.log('---------------------------------------------------------------------------');
  console.log(`| ${'Name'.padEnd(45)} | ${'Sell In'.padStart(10)} | ${'Quality'.padStart(10)} |`);
  console.log('---------------------------------------------------------------------------');

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    console.log(`| ${item.name.padEnd(45)} | ${item.sellIn.toString().padStart(10)} | ${item.quality.toString().padStart(10)} |`);
  }

  console.log('---------------------------------------------------------------------------');

  items = updateQuality(items);
}

console.log('\n=== Simulation Over. Goodbye! ===');
