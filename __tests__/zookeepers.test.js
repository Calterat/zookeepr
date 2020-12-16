const fs = require('fs');
const { zookeepers } = require('../data/zookeepers');
const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../lib/zookeepers');

jest.mock('fs');

test('Filter by query', () => {
  const data = [
    {
    id: "0",
    name: "Kim",
    age: 28,
    favoriteAnimal: "dolphin"
    },
    {
    id: "1",
    name: "Raksha",
    age: 31,
    favoriteAnimal: "penguin"
    }
  ]

  const result = filterByQuery( { name: 'Kim' }, data);

  expect(result.length).toEqual(1);
})

test('Find by ID', () => {
  const data = [
    {
    id: "0",
    name: "Kim",
    age: 28,
    favoriteAnimal: "dolphin"
    },
    {
    id: "1",
    name: "Raksha",
    age: 31,
    favoriteAnimal: "penguin"
    }
  ]

  const result = findById('1', data);

  expect(result.name).toBe('Raksha');
})

test('Create a Zookeeper', () => {
  const newZookeeper = {
    name: 'Toby',
    age: 28,
    favoriteAnimal: "monkey"
  }

  const result = createNewZookeeper(newZookeeper, zookeepers);

  expect(result.name).toBe('Toby');
  expect(result.favoriteAnimal).toBe('monkey');
})

test('Validate Input', () => {
  const validZookeeper = {
    name: "Spindle",
    age: 35,
    favoriteAnimal: "Spider",
  }

  const invalidZookeeper = {
    name: "Spindle",
    age: 35,
  }

  const result1 = validateZookeeper(validZookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result1).toBe(true);
  expect(result2).toBe(false);
})