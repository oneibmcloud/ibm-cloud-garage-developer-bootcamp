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

const tryCatch = f => {
  try {
    return Right( f() );
  } catch (e) {
    return Left(e);
  }
};

const getPort = () =>
  tryCatch(() => fs.readFileSync('server/08-functional/config.json'))
  .map(c => JSON.parse(c))
  .fold(
    e => 3000,
    c => c.port
  );

describe('composable error handling', () => {
  it('getPort', () => {
    getPort().should.equal(8888);
  });
});
