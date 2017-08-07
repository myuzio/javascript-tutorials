import { Monster, Goblin } from './';

describe.skip('monster', () => {
  let monster = new Monster('troll');
  it('should return the stats of the monster', () => {
    expect(monster.getMonsterStats()).toEqual(
      'This is an enemy of type troll with 100 health points.'
    );
    expect(monster.getHP()).toEqual(100);

    monster = new Monster('dragon', 200);
    expect(monster.getMonsterStats()).toEqual(
      'This is an enemy of type dragon with 200 health points.'
    );
    expect(monster.getHP()).toEqual(200);
  });
  it('should allow update of health points', () => {
    monster.setHP(50);
    expect(monster.getHP()).toEqual(50);
  });
});

describe.skip('goblin', () => {
  let monster = new Goblin();
  it('should return the stats of the goblin', () => {
    expect(monster.getMonsterStats()).toEqual(
      'This is a healthy goblin with 100 health points.'
    );
    expect(monster.getHP()).toEqual(100);

    monster = new Goblin(50);
    expect(monster.getMonsterStats()).toEqual(
      'This is a wounded goblin with 50 health points.'
    );
    expect(monster.getHP()).toEqual(50);

    monster = new Goblin(0);
    expect(monster.getMonsterStats()).toEqual('This is a dead goblin.');
    expect(monster.getHP()).toEqual(0);
  });
  it('should allow update of health points', () => {
    monster.setHP(20);
    expect(monster.getHP()).toEqual(20);
  });
});
