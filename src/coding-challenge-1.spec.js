import { expect } from 'chai';
import { listByGender, groupByDepartment } from './coding-challenge-1';

describe('Coding Challenge #1', () => {

  describe('listByGender(gender)', () => {
    it('should return 4 items when gender is "M"', () => {
      expect(listByGender('M').length).to.equal(4);
    });

    it('should return 6 items when gender is "F"', () => {
      expect(listByGender('F').length).to.equal(6);
    });

    it('should return 0 items when gender is "Male"', () => {
      expect(listByGender('Male').length).to.equal(0);
    });

    it('should return 0 items when gender is "Female"', () => {
      expect(listByGender('Female').length).to.equal(0);
    });

    it('should return 0 items when gender is ""', () => {
      expect(listByGender('').length).to.equal(0);
    });

    it('should return 0 items when gender is undefined', () => {
      expect(listByGender(undefined).length).to.equal(0);
    });
  });


  describe('groupByDepartment()', () => {
    it('should return an object with department names and the people in it', () => {
      const EXPECTED_OUTPUT = {
        BP: [
          {
            name: 'Arisa',
            department: 'BP',
            gender: 'F'
          }
        ],
        IT: [
          {
            name: 'Ham',
            department: 'IT',
            gender: 'F'
          },
          {
            name: 'Alice',
            department: 'IT',
            gender: 'F'
          }
        ],
        DA: [
          {
            name: 'Anna',
            department: 'DA',
            gender: 'F'
          }
        ],
        Sales: [
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
        ]
      };
      
      expect(groupByDepartment()).to.deep.equal(EXPECTED_OUTPUT);
    });
  });

});