'use client';

import { useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import './../../../app/globals.css';
import Avatar from '../../Atoms/Avatar';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar: 'https://via.placeholder.com/50',
  },
];

export default function SelectMenus() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <div className="bg-gray-100 p-5">
      <Listbox value={selected} onChange={setSelected}>
        <Label className="block text-sm/6 font-medium text-gray-900">
          Assigned to
        </Label>
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <img
                alt=""
                src={selected.avatar}
                className="size-5 shrink-0 rounded-full"
              />
              <span className="block truncate">{selected.name}</span>
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm"
          >
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
              >
                <div className="flex items-center">
                  <Avatar src={person.avatar} size={20} />
                  <span className="group-data-selected:font-semibold ml-3 block truncate font-normal">
                    {person.name}
                  </span>
                </div>

                <span className="group-not-data-selected:hidden group-data-focus:text-white absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
