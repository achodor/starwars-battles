import { CharacterCompare } from '../types/Character';

export default function CharactersCard({ character }: { character: CharacterCompare }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold uppercase">{character.name}</h2>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Height:</span>{' '}
        <span className="text-2xl font-extrabold">{character.height}</span>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Mass:</span>{' '}
        <span className="text-2xl font-extrabold">{character.mass}</span>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Films:</span>{' '}
        <span className="text-2xl font-extrabold">{character.films}</span>
      </div>
      {character.isWinner && (
        <strong className="mt-10 block text-center text-3xl font-extrabold uppercase text-yellow-400">Winner</strong>
      )}
    </div>
  );
}
