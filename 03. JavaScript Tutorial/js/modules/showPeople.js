// default export - export with exact name

// option 1
// const showPeople = people => {
//   const newPeople = people
//     .map(person => {
//       const { name, job } = person;
//       return `<p>${name} <b>${job}</b> </p>`;
//     })
//     .join("");
//   return newPeople;
// };

// export default showPeople;

// option 2
// export default people => {
//   const newPeople = people
//     .map(person => {
//       const { name, job } = person;
//       return `<p>${name} <b>${job}</b> </p>`;
//     })
//     .join("");
//   return newPeople;
// };
