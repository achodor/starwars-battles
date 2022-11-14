import { Character, CharacterCompare } from '../types/Character';

export const useCharacters = (characters: Array<Character | null>) => {
  const charactersHeight = characters.map(character => Number(character?.height) || 0);
  const charactersMass = characters.map(character => Number(character?.mass) || 0);
  const charactersFilms = characters.map(character => Number(character?.films?.length) || 0);
  const maxHeight = charactersHeight.indexOf(Math.max(...charactersHeight));
  const maxMass = charactersMass.indexOf(Math.max(...charactersMass));
  const maxRating = characters.findIndex(character => character?.films?.length === Math.max(...charactersFilms));

  const charactersComparison: CharacterCompare[] = characters.map((character, index) => {
    return {
      isWinner: false,
      points: Number(maxHeight === index) + Number(maxMass === index) + Number(maxRating === index),
      name: character?.name || '',
      height: Number(character?.height) || 0,
      mass: Number(character?.mass) || 0,
      films: Number(character?.films?.length) || 0
    };
  });

  const points = charactersComparison.map(character => Number(character.points) || 0);
  const winner = points.indexOf(Math.max(...points));

  charactersComparison[winner] = { ...charactersComparison[winner], isWinner: characters.filter(Boolean).length > 1 };

  return {
    charactersComparison
  };
};
