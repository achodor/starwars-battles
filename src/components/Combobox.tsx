import { useState, Fragment, useEffect } from 'react';
import { Combobox as HeadlessCombobox, Transition } from '@headlessui/react';

type ComboboxProps = {
  url: string;
  onChange?: (value: string) => void;
};

const Combobox = <T extends { name: string; url: string }>({ url, onChange }: ComboboxProps) => {
  const [data, setData] = useState<T[]>([]);
  const [selected, setSelected] = useState<T | null>(null);
  const [query, setQuery] = useState('');

  const handleChange = (item: T) => {
    setSelected(item);
    onChange && onChange(item.url);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/${url}?search=${query}`)
      .then(response => response.json())
      .then(data => setData(data?.results || []))
      .catch(e => console.error(e));
  }, [query]);

  return (
    <HeadlessCombobox value={selected} onChange={handleChange}>
      <div className="relative z-10 mt-1">
        <div className="relative flex h-12 items-center">
          <HeadlessCombobox.Input
            className="z-10 h-full w-full border border-zinc-800 bg-black px-4 font-bold uppercase placeholder:text-zinc-700"
            displayValue={(item: T) => item?.name}
            onChange={event => setQuery(event.target.value)}
            placeholder="Select"
          />
          <HeadlessCombobox.Button className="absolute inset-y-0 right-2 z-10 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </HeadlessCombobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <HeadlessCombobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-black py-1 font-bold uppercase">
            {data?.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-600">Nothing found</div>
            ) : (
              data?.map(item => (
                <HeadlessCombobox.Option
                  key={item.name}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${active ? 'text-yellow-400' : 'text-white'}`
                  }
                  value={item}
                >
                  {item.name}
                </HeadlessCombobox.Option>
              ))
            )}
          </HeadlessCombobox.Options>
        </Transition>
      </div>
    </HeadlessCombobox>
  );
};

export default Combobox;
