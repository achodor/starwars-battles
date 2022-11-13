import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import StarshipsCard from '../components/StarshipCard';
import { useStarships } from '../hooks/useStarships';
import { Starship } from '../types/Starship';

export async function loader({ params }: LoaderFunctionArgs): Promise<Starship[]> {
  const res = await fetch(`https://swapi.dev/api/starships/${params.one}/`);

  if (res.status !== 200) {
    return [];
  }

  return [await res.json()];
}

export default function StarshipsSingle() {
  const data = useLoaderData() as Starship[];
  const { starshipsComparison } = useStarships(data);

  return data.length ? <StarshipsCard starship={starshipsComparison[0]} /> : null;
}
