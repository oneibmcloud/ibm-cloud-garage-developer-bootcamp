/*eslint no-shadow: "off"*/
/*eslint no-unused-vars: "off"*/

import {Right, Left, fromNullable} from './functional-types';


const findColor = name =>
    ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]);

const findEitherColor = name => {
  const found = ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]);
  return found ? Right(found) : Left(null);
};

const findNullableColor = name =>
    fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]);

describe('either', () => {
  it('right runs the mapped function and puts result back in the box', () => {
    Right(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .inspect().should.equal('Right(1.5)');
  });

  it('left does not run the mapped function and just puts x back in the box', () => {
    Left(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .inspect().should.equal('Left(2)');
  });

  it('right', () => {
    Right(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .fold(x => 'error', y => y).should.equal(1.5);
  });

  it('left', () => {
    Left(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .fold(x => 'error', y => y).should.equal('error');
  });

  it('find color', () => {
    findColor('red').should.equal('#ff4444');
  });

  it('find color transform', () => {
    findColor('red').slice(1).toUpperCase().should.equal('FF4444');
  });

  it('find nullable color', () => {
    findNullableColor('red')
        .map(x => x.slice(1))
        .fold(
            x => 'no color',
            x => x.toUpperCase()
        ).should.equal('FF4444');

    findNullableColor('green')
        .map(x => x.slice(1))
        .fold(
            x => 'no color',
            x => x.toUpperCase()
        ).should.equal('no color');
  });

  it('find either color', () => {
    findEitherColor('red')
      .map(x => x.slice(1))
      .fold(
        x => 'no color',
        x => x.toUpperCase()
    ).should.equal('FF4444');

    findEitherColor('green')
      .map(x => x.slice(1))
      .fold(
        x => 'no color',
        x => x.toUpperCase()
    ).should.equal('no color');
  });
});
