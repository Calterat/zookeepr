const fs = require('fs');
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../lib/animals');
const { animals } = require('../data/animals');

jest.mock('fs');

test('Creates an animal object', () => {
  const animal = createNewAnimal({
    id: "0",
    name: "Spindle",
    species: "bear",
    diet: "carnivore",
    personalityTraits: [
      "hungry",
      "zany",
      "loving"
    ]
  }, animals)

  expect(animal.name).toBe("Spindle");
  expect(animal.id).toBe('0');
  
})

test('Filters by query', () => {
  const startingAnimals = [
    {
      id: "0",
      name: "Spindle",
      species: "bear",
      diet: "carnivore",
      personalityTraits: [
        "hungry",
        "zany",
        "loving"
      ]
    },
    {
      id: "1",
      name: "Terry",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: [
        "anxious",
        "goofy"
      ]
    }  
  ]

  const updatedAnimals = filterByQuery({ species: 'gorilla' }, startingAnimals);

  expect(updatedAnimals.length).toEqual(1);
})

test('Find animal by ID', () => {
  const startingAnimals = [
    {
      id: "0",
      name: "Spindle",
      species: "bear",
      diet: "carnivore",
      personalityTraits: [
        "hungry",
        "zany",
        "loving"
      ]
    },
    {
      id: "1",
      name: "Terry",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: [
        "anxious",
        "goofy"
      ]
    }
  ]

  const foundAnimal = findById('1', startingAnimals);

  expect(foundAnimal.name).toBe('Terry');
})

test('Validates proper animal input', () => {
  const animal = {
    id: "0",
    name: "Spindle",
    species: "bear",
    diet: "carnivore",
    personalityTraits: [
      "hungry",
      "zany",
      "loving"
    ]
  }

  const invalidAnimal = {
    id: "0",
    name: "Spindle",
    species: "bear",
    diet: "carnivore",
  }

  const result1 = validateAnimal(animal);
  const result2 = validateAnimal(invalidAnimal);

  expect(result1).toBe(true);
  expect(result2).toBe(false);
});