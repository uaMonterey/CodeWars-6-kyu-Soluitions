// Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

// The input objects will have the following structure:

// {
//   house: 1234,
//   street: "Lonely St.",
//   city: "Soldotna",
//   zipcode: 99669,
//   state: "AK"
// }
// The returned objects must have the following structure:

// {
//   state: "AK",
//   count: 25
// }
// The states must be ordered by first appearance.

// An error is expected if an input object doesn't have a state property.

function count(addresses) {
  return Object.entries(
    addresses.reduce((acc, el) => {
      if (!el.state) {
        return error;
      }

      acc[el.state] = (acc[el.state] || 0) + 1;
      return acc;
    }, {}),
  ).map(el => ({
    state: el[0],
    count: el[1],
  }));
}
