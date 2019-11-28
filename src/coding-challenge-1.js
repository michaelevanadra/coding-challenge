const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

/**
 * Function that filters people based from gender.
 *
 * @param {string} gender
 * Determines the gender of person that needs to be filtered.
 *
 * @returns {Array}
 */
export function listByGender(gender) {
  return people.filter(person => person.gender === gender);
}

/**
 * Groups a person based from the department they belong.
 *
 * @returns {Object}
 * Name of departments and the group of people within it.
 */
export function groupByDepartment() {
  return people.reduce((output, current) => ({
    ...output,
    [current.department]: [...output[current.department] || [],
    current]
  }), {});
}
