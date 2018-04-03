# Gilded Rose Kata in Javascript

Adapted for Javascript and Jest testing framework from https://github.com/NotMyself/GildedRose and https://github.com/emilybache/GildedRose-Refactoring-Kata

# Getting Started

This project uses [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com). You will want to have both tools installed before starting this kata.

To use this kata, get started by reading the Kata Prompt below so you understand the requirements of the system. The code provided in `UpdateQuality.js` has the first rules already implemented, but you have been tasked with adding a new rule for "Conjured" items.

## Installation

With Node and Yarn installed, to install dependencies run:

```bash
yarn install
```

## Running Tests

To run tests:

```bash
yarn test
```

You might find it convenient to rerun tests as files change. To do this, run:

```bash
yarn test --watch
```

## Running Simulation

To run a simulation of how a set of goods changes over 10 days run:

```bash
yarn start
```

# Kata Prompt

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

- All items have a sellIn property which denotes the number of days we have to sell the item
- All items have a quality property which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes", like aged brie, increases in Quality as it's SellIn value approaches; Quality increases by 2 when there are 10 days or less, and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the updateQuality method and add any new code as long as everything still works correctly. The updateQuality method will be passed an array of Items that look like:

```javascript
[
  { name: '+5 Dexterity Vest', sellIn: 10, quality: 20 },
  { name: 'Aged Brie', sellIn: 2, quality: 0 },
]
```

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.
