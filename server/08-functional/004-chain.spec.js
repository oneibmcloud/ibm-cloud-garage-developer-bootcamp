/*eslint no-shadow: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint eqeqeq: "off"*/
import fs from 'fs';

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x =>
    x != null ? Right(x) : Left(null);

const getPort = () =>{
  try {
    const s = fs.readFileSync('server/08-functional/config.json');
    const config = JSON.parse(s);
    return config.port;
  } catch (e) {
    return 3000;
  }
};

describe('', () => {
  it('getPort', () => {
    getPort().should.equal(8888);
  });
});
