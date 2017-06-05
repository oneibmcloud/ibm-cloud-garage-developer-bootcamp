/*eslint eqeqeq: "off"*/
/*eslint no-unused-vars: "off"*/

const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const Right = x =>
({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (l, r) => r(x),
  inspect: () => `Right(${x})`
});

const Left = x =>
({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (l, r) => l(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x => x != null ? Right(x) : Left(null);

const tryCatch = f => {
  try {
    return Right( f() );
  } catch (e) {
    return Left(e);
  }
};

const Sum = x => ({
  x,
  concat: ({x: y}) => Sum(x + y),
  empty: () => Sum(0),
  inspect: () => `Sum(${x})`,
  toString: () => `Sum(${x})`
});

const All = x => ({
  x,
  concat: ({x: y}) => All(x && y),
  empty: () => All(true),
  inspect: () => `All(${x})`,
  toString: () => `All(${x})`
});

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`,
  toString: () => `First(${x})`
});

export {Box, Right, Left, fromNullable, tryCatch, Sum, All, First};
