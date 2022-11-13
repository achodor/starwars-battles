import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import CharactersCard from '../components/CharacterCard';
import { useCharacters } from '../hooks/useCharacters';
import { Character } from '../types/Character';

export async function loader({ params }: LoaderFunctionArgs): Promise<Character[]> {
  const resOne = await fetch(`https://swapi.dev/api/people/${params.one}/`);
  const resTwo = await fetch(`https://swapi.dev/api/people/${params.two}/`);

  if (resOne.status !== 200 || resTwo.status !== 200) {
    return [];
  }

  return [await resOne.json(), await resTwo.json()];
}

export default function CharactersCompare() {
  const data = useLoaderData() as Character[];
  const { charactersComparison } = useCharacters(data);

  return data.length === 2 ? (
    <>
      <CharactersCard character={charactersComparison[0]} />
      <CharactersCard character={charactersComparison[1]} />
    </>
  ) : null;
}
