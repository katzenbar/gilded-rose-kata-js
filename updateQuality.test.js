const updateQuality = require('./updateQuality');

describe('updateQuality', () => {
  it('Normal items degrade one "quality" per day', () => {
    const items = [
      { name: '+5 Dexterity Vest', sellIn: 10, quality: 20 },
    ];

    const updatedItems = updateQuality(items);
    expect(updatedItems[0].quality).toBe(19);
  });

  it('Once the sell by date has passed, Quality degrades twice as fast', () => {
    const items = [
      { name: '+5 Dexterity Vest', sellIn: 0, quality: 20 },
    ];

    const updatedItems = updateQuality(items);
    expect(updatedItems[0].quality).toBe(18);
  });

  it('An item\'s quality cannot go below zero', () => {
    const items = [
      { name: '+5 Dexterity Vest', sellIn: 0, quality: 0 },
    ];

    const updatedItems = updateQuality(items);
    expect(updatedItems[0].quality).toBe(0);
  });

  it('An item\'s sellIn property should reduce by one each day', () => {
    const items = [
      { name: 'Example Item', sellIn: 1, quality: 10 },
    ];

    const updatedItems = updateQuality(items);
    expect(updatedItems[0].sellIn).toBe(0);
  });

  it('An item\'s sellIn property can go negative', () => {
    const items = [
      { name: 'Example Item', sellIn: 0, quality: 10 },
    ];

    const updatedItems = updateQuality(items);
    expect(updatedItems[0].sellIn).toBe(-1);
  });

  describe('Aged Brie', () => {
    it('increases in quality the older it gets', () => {
      const items = [
        { name: 'Aged Brie', sellIn: 1, quality: 5 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].quality).toBe(6);
    });

    it('increases in quality by two after sellIn is zero', () => {
      const items = [
        { name: 'Aged Brie', sellIn: 0, quality: 5 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].quality).toBe(7);
    });

    it('cannot increase quality above 50', () => {
      const items = [
        { name: 'Aged Brie', sellIn: 0, quality: 50 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].quality).toBe(50);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it ('does not change over time', () => {
      const items = [
        { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].sellIn).toBe(0);
      expect(updatedItems[0].quality).toBe(80);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it ('increases in quality by one when sellIn is greater than ten', () => {
      const items = [
        { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 10 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].sellIn).toBe(10);
      expect(updatedItems[0].quality).toBe(11);
    });

    it ('increases in quality by two when sellIn is less or equal to ten', () => {
      const items = [
        { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 10 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(12);
    });

    it ('increases in quality by three when sellIn is less or equal to five', () => {
      const items = [
        { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 10 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].sellIn).toBe(4);
      expect(updatedItems[0].quality).toBe(13);
    });

    it ('decreases quality to zero when the concert has passed', () => {
      const items = [
        { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 10 },
      ];
  
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].sellIn).toBe(-1);
      expect(updatedItems[0].quality).toBe(0);
    });
  });
});
