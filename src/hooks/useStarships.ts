import { Starship, StarshipCompare } from '../types/Starship';

export const useStarships = (staships: Starship[]) => {
  const starshipsCosts = staships.map(starship => Number(starship.cost_in_credits) || 0);
  const starshipsSpeeds = staships.map(starship => Number(starship.max_atmosphering_speed) || 0);
  const starshipsRatings = staships.map(starship => Number(starship.hyperdrive_rating) || 0);
  const maxCost = starshipsCosts.indexOf(Math.max(...starshipsCosts));
  const maxSpeed = starshipsCosts.indexOf(Math.max(...starshipsSpeeds));
  const maxRating = starshipsCosts.indexOf(Math.max(...starshipsRatings));

  const starshipsComparison: StarshipCompare[] = staships.map((starship, index) => {
    return {
      isWinner: false,
      points: Number(maxCost === index) + Number(maxSpeed === index) + Number(maxRating === index),
      name: starship.name,
      cost: Number(starship.cost_in_credits) || 0,
      maxSpeed: Number(starship.max_atmosphering_speed) || 0,
      rating: Number(starship.hyperdrive_rating) || 0
    };
  });

  const points = starshipsComparison.map(starship => Number(starship.points) || 0);
  const winner = points.indexOf(Math.max(...points));

  starshipsComparison[winner] = { ...starshipsComparison[winner], isWinner: staships.length > 1 };

  return {
    starshipsComparison
  };
};
