import { render, screen, fireEvent } from '@testing-library/react';
import SelectMenus from './index';

const items = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar: '/images/avatar.jpg',
  },
];

describe('SelectMenus', () => {
  it('renders correctly', () => {
    render(<SelectMenus items={items} defaultSelected={items[3]} />);
    expect(screen.getByText('Assigned to')).toBeInTheDocument();
    expect(screen.getByText('Tom Cook')).toBeInTheDocument();
  });

  it('opens the dropdown when button is clicked', () => {
    render(<SelectMenus items={items} defaultSelected={items[3]} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('selects an option when clicked', () => {
    render(<SelectMenus items={items} defaultSelected={items[3]} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Wade Cooper'));
    expect(screen.getByText('Wade Cooper')).toBeInTheDocument();
  });
});
