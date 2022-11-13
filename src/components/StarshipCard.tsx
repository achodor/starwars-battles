import { StarshipCompare } from '../types/Starship';

export default function StarshipsCard({ starship }: { starship: StarshipCompare }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold uppercase">{starship.name}</h2>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Hyperdrive rating:</span>{' '}
        <span className="text-2xl font-extrabold">{starship.rating}</span>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Cost in credits:</span>{' '}
        <span className="text-2xl font-extrabold">{starship.cost}</span>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xl font-bold">Max atmosphering speed:</span>{' '}
        <span className="text-2xl font-extrabold">{starship.maxSpeed}</span>
      </div>
      {starship.isWinner && (
        <strong className="mt-10 block text-center text-3xl font-extrabold uppercase text-yellow-400">Winner</strong>
      )}
    </div>
  );
}
