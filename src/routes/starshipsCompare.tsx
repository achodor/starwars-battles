import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import StarshipsCard from '../components/StarshipCard';
import { useStarships } from '../hooks/useStarships';
import { Starship } from '../types/Starship';

export async function loader({ params }: LoaderFunctionArgs): Promise<Starship[]> {
  const resOne = await fetch(`https://swapi.dev/api/starships/${params.one}/`);
  const resTwo = await fetch(`https://swapi.dev/api/starships/${params.two}/`);

  if (resOne.status !== 200 || resTwo.status !== 200) {
    return [];
  }

  return [await resOne.json(), await resTwo.json()];
}

export default function StarshipsCompare() {
  const data = useLoaderData() as Starship[];
  const { starshipsComparison } = useStarships(data);

  return data.length === 2 ? (
    <>
      <StarshipsCard starship={starshipsComparison[0]} />
      <StarshipsCard starship={starshipsComparison[1]} />
    </>
  ) : null;
}
