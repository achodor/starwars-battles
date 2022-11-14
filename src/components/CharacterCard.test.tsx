import { describe, expect, it } from 'vitest';
import { render, screen } from '../utils/test-utils';
import CharactersCard from './CharacterCard';

describe('CharactersCard test', () => {
  it('the character name is visible', () => {
    render(
      <CharactersCard
        character={{
          films: 2,
          height: 100,
          isWinner: false,
          mass: 20,
          name: 'Yoda',
          points: 2
        }}
      />
    );
    expect(screen.getByText(/Yoda/)).toBeInTheDocument();
  });

  it('the winner is visible', () => {
    render(
      <CharactersCard
        character={{
          films: 2,
          height: 100,
          isWinner: true,
          mass: 20,
          name: 'Yoda',
          points: 2
        }}
      />
    );
    expect(screen.getByText(/Winner/)).toBeInTheDocument();
  });
});
