import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import StarshipsCard from '../components/StarshipCard';
import { useStarships } from '../hooks/useStarships';
import { Starship } from '../types/Starship';

export async function loader({ params }: LoaderFunctionArgs): Promise<Starship[]> {
  let one = null;
  let two = null;

  if (Number(params.one)) {
    const resOne = await fetch(`https://swapi.dev/api/starships/${params.one}/`);
    one = await resOne.json();
  }

  if (Number(params.two)) {
    const resTwo = await fetch(`https://swapi.dev/api/starships/${params.two}/`);
    two = await resTwo.json();
  }

  return [one, two];
}

export default function StarshipsCompare() {
  const data = useLoaderData() as Starship[];
  const { starshipsComparison } = useStarships(data);

  return (
    <>
      {starshipsComparison[0]?.name ? <StarshipsCard starship={starshipsComparison[0]} /> : <div />}
      {starshipsComparison[1]?.name ? <StarshipsCard starship={starshipsComparison[1]} /> : <div />}
    </>
  );
}
