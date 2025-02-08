import { useState } from 'react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import Avatar from '../../Avatar';
import { Item, SelectMenusProps } from './SelectMenus.interface';

const SelectMenus: React.FC<SelectMenusProps> = ({
  items,
  defaultSelected,
}) => {
  const [selected, setSelected] = useState<Item>(defaultSelected || items[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: Item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="grid w-full cursor-default grid-cols-1 rounded-md border border-line-light py-2 pl-3 pr-2 text-left sm:text-sm/6"
      >
        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          {selected.avatar && (
            <Avatar alt={selected.name} src={selected.avatar} size={5} circle />
          )}
          <span className="block truncate">{selected.name}</span>
        </span>
        <ChevronUpDownIcon
          aria-hidden="true"
          className="col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-4"
        />
      </button>

      {isOpen && (
        <ul className="none absolute z-10 max-h-56 w-full overflow-auto border border-l-0 border-r-0 border-t-0 border-b-line-light py-1 text-base sm:text-sm">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`group relative mt-1 cursor-default select-none py-2 pl-3 pr-9 hover:bg-line-dark ${
                selected.id === item.id ? 'bg-line-dark text-letter-light' : ''
              }`}
            >
              <div className="flex items-center">
                {item.avatar && (
                  <Avatar src={item.avatar} alt={item.name} size={5} circle />
                )}
                <span className="ml-3 block truncate font-normal">
                  {item.name}
                </span>
              </div>

              {selected.id === item.id && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-line-dark">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMenus;
