import { describe, expect, it } from 'vitest';
import { render, screen } from '../utils/test-utils';
import StarshipCard from './StarshipCard';

describe('StarshipCard test', () => {
  it('the character name is visible', () => {
    render(
      <StarshipCard
        starship={{
          name: 'X Wing',
          cost: 10000,
          isWinner: false,
          maxSpeed: 1000,
          points: 2,
          rating: 2
        }}
      />
    );
    expect(screen.getByText(/X Wing/)).toBeInTheDocument();
  });

  it('the winner is visible', () => {
    render(
      <StarshipCard
        starship={{
          name: 'X Wing',
          cost: 10000,
          isWinner: true,
          maxSpeed: 1000,
          points: 2,
          rating: 2
        }}
      />
    );
    expect(screen.getByText(/Winner/)).toBeInTheDocument();
  });
});
