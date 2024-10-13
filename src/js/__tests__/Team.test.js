import Team from '../Team';
import Character from '../Character';

describe('Проверка метода класса Team', () => {
  test('Проверка метода с итератором', () => {
    let tm = new Team();
    tm.add(new Character("Ivan", "defender", 100, 1, 10, 5));
    tm.add(new Character("Vasya", "warrior", 100, 1, 10, 5));
    let objdata = ["Patya", "freeman", 100, 1, 10, 5];
    tm.add(new Character(...objdata));
    let exp = new Character(...objdata);
    tm.showNextChar();
    tm.showNextChar();
    expect(tm.showNextChar()).toEqual(exp);
    });
}); 
