import { Fragment, useState } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = {
  categories: [
    {
      id: 'category1',
      name: 'Category 1',
      featured: [
        {
          name: 'Featured Item 1',
          href: '#',
          imageSrc: '/images/avatar.jpg',
          imageAlt: 'Description of featured item 1.',
        },
        {
          name: 'Featured Item 2',
          href: '#',
          imageSrc: '/images/avatar.jpg',
          imageAlt: 'Description of featured item 2.',
        },
      ],
      sections: [
        {
          id: 'section1',
          name: 'Section 1',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
            { name: 'Item 5', href: '#' },
            { name: 'Item 6', href: '#' },
            { name: 'Item 7', href: '#' },
            { name: 'Item 8', href: '#' },
            { name: 'Item 9', href: '#' },
            { name: 'Item 10', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'section2',
          name: 'Section 2',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
            { name: 'Item 5', href: '#' },
            { name: 'Item 6', href: '#' },
          ],
        },
        {
          id: 'section3',
          name: 'Section 3',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
            { name: 'Item 5', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'category2',
      name: 'Category 2',
      featured: [
        {
          name: 'Featured Item 3',
          href: '#',
          imageSrc: '/images/avatar.jpg',
          imageAlt: 'Description of featured item 3.',
        },
        {
          name: 'Featured Item 4',
          href: '#',
          imageSrc: '/images/avatar.jpg',
          imageAlt: 'Description of featured item 4.',
        },
      ],
      sections: [
        {
          id: 'section4',
          name: 'Section 4',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
            { name: 'Item 5', href: '#' },
            { name: 'Item 6', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'section5',
          name: 'Section 5',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
            { name: 'Item 5', href: '#' },
            { name: 'Item 6', href: '#' },
          ],
        },
        {
          id: 'section6',
          name: 'Section 6',
          items: [
            { name: 'Item 1', href: '#' },
            { name: 'Item 2', href: '#' },
            { name: 'Item 3', href: '#' },
            { name: 'Item 4', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Page 1', href: '#' },
    { name: 'Page 2', href: '#' },
  ],
};

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function MobileMenu({
  open,
  setOpen,
  activeTab,
  setActiveTab,
}: MobileMenuProps) {
  return (
    open && (
      <div className="fixed inset-0 z-40 lg:hidden">
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => setOpen(false)}
        />
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveTab(category.name)}
                      className={`${
                        activeTab === category.name
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-900'
                      } flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-10 px-4 pb-8 pt-10">
                {navigation.categories.map(
                  (category) =>
                    activeTab === category.name && (
                      <Fragment key={category.name}>
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <img
                                alt={item.imageAlt}
                                src={item.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 z-10"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Fragment>
                    )
                )}
              </div>
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function DesktopMenu() {
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.categories.map((category) => (
          <div key={category.name} className="flex">
            <div className="relative flex">
              <button className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800">
                {category.name}
              </button>
            </div>
            <div className="absolute inset-x-0 top-full text-sm text-gray-500">
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-white shadow-sm"
              />
              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                      {category.featured.map((item) => (
                        <div
                          key={item.name}
                          className="group relative text-base sm:text-sm"
                        >
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${section.name}-heading`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${section.name}-heading`}
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flex">
                                <a
                                  href={item.href}
                                  className="hover:text-gray-800"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {navigation.pages.map((page) => (
          <a
            key={page.name}
            href={page.href}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            {page.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(navigation.categories[0].name);

  return (
    <div className="bg-menu">
      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <DesktopMenu />
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="size-6"
                    />
                  </a>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
