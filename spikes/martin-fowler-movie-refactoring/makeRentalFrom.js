let makeRentalFrom = (movie, daysRented) => {

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

export {makeRentalFrom};
