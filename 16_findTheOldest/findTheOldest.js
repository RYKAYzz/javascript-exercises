function findTheOldest(people) {
  return people.reduce((a, b) => {
    const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return ageB > ageA ? b : a;
  });
}
// Do not edit below this line
module.exports = findTheOldest;
