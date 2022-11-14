import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import CharactersCard from '../components/CharacterCard';
import { useCharacters } from '../hooks/useCharacters';
import { Character } from '../types/Character';

export async function loader({ params }: LoaderFunctionArgs): Promise<Character[]> {
  let one = null;
  let two = null;

  if (Number(params.one)) {
    const resOne = await fetch(`https://swapi.dev/api/people/${params.one}/`);
    one = await resOne.json();
  }

  if (Number(params.two)) {
    const resTwo = await fetch(`https://swapi.dev/api/people/${params.two}/`);
    two = await resTwo.json();
  }

  return [one, two];
}

export default function CharactersCompare() {
  const data = useLoaderData() as Character[];
  const { charactersComparison } = useCharacters(data);

  return (
    <>
      {charactersComparison[0]?.name ? <CharactersCard character={charactersComparison[0]} /> : <div />}
      {charactersComparison[1]?.name ? <CharactersCard character={charactersComparison[1]} /> : <div />}
    </>
  );
}
