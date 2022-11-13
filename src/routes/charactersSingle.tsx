import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import CharactersCard from '../components/CharacterCard';
import { useCharacters } from '../hooks/useCharacters';
import { Character } from '../types/Character';

export async function loader({ params }: LoaderFunctionArgs): Promise<Character[]> {
  const res = await fetch(`https://swapi.dev/api/people/${params.one}/`);

  if (res.status !== 200) {
    return [];
  }

  return [await res.json()];
}

export default function CharactersSingle() {
  const data = useLoaderData() as Character[];
  const { charactersComparison } = useCharacters(data);

  return data.length ? <CharactersCard character={charactersComparison[0]} /> : null;
}
