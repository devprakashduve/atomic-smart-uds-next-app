import { Fragment, useState } from 'react';
import {
  ArrowRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Img from '@/Components/Atoms/Img';
import {
  MegaMenuMobileMenuProps,
  MegaMenuDesktopMenuProps,
  MegaMenuNavBarComponentProps,
} from './MegaMenuNavBar.interface';
import Link from '@/Components/Atoms/Link';
import Button from '@/Components/Atoms/Button';

function MobileMenu({
  open,
  setOpen,
  activeTab,
  setActiveTab,
  navigation,
  closeMenuText,
  shopNowText,
  signInText,
  createAccountText,
  changeCurrencyText,
  currency,
}: MegaMenuMobileMenuProps) {
  return (
    open && (
      <div className="fixed inset-0 z-40 w-full lg:hidden">
        <div
          className="bg-menu-dark fixed inset-0"
          onClick={() => setOpen(false)}
        />
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-menu-background from-menu-from_background to-menu-to_background relative flex w-full max-w-xs flex-col overflow-y-auto bg-gradient-to-r pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-menu-dark relative -m-2 inline-flex items-center justify-center rounded-md p-2"
              >
                <span className="sr-only">{closeMenuText}</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-2">
              <div className="border-menu-dark border-b">
                <div className="-mb-px flex space-x-8 px-4">
                  {navigation.categories &&
                    navigation.categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() =>
                          setActiveTab(
                            activeTab === category.name ? '' : category.name
                          )
                        }
                        className={`${
                          activeTab === category.name
                            ? 'border-menu-dark/90 text-menu-dark'
                            : 'text-menu-dark/70 border-transparent'
                        } flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base`}
                      >
                        {category.name}
                      </button>
                    ))}
                </div>
              </div>
              <div className="space-y-10 px-4 pb-8 pt-10">
                {navigation.categories &&
                  navigation.categories.map(
                    (category) =>
                      activeTab === category.name && (
                        <Fragment key={category.name}>
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured &&
                              category.featured.map((item) => (
                                <div key={item.name} className="group relative">
                                  <Img
                                    alt={item.imageAlt}
                                    src={item.imageSrc}
                                    className="bg-menu-light aspect-square w-full rounded-lg object-cover group-hover:opacity-75"
                                  />
                                  <Link
                                    href={item.href}
                                    className="text-menu-dark/90 hover:text-menu-dark/50 mt-6 block"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10"
                                    />
                                    {item.name}
                                  </Link>
                                  <p aria-hidden="true" className="mt-1">
                                    {shopNowText}
                                  </p>
                                </div>
                              ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="text-menu-dark"
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
                                    <Link
                                      href={item.href}
                                      className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                                    >
                                      {item.name}
                                    </Link>
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
            <div className="border-menu-dark space-y-6 border-t px-4 py-6">
              {navigation.pages &&
                navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
            </div>
            <div className="border-menu-dark space-y-6 border-t px-4 py-6">
              {signInText && (
                <div className="flow-root">
                  <Link
                    href="#"
                    className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                  >
                    {signInText}
                  </Link>
                </div>
              )}

              {createAccountText && (
                <div className="flow-root">
                  <Link
                    href="#"
                    className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                  >
                    {createAccountText}
                  </Link>
                </div>
              )}
            </div>
            <div className="border-menu-dark border-t px-4 py-6">
              <Link
                href="#"
                className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 flex items-center p-2"
              >
                <Img
                  alt=""
                  src="/images/avatar.jpg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="text-menu-dark/90 hover:text-menu-dark/50 ml-3 block text-base">
                  {currency}
                </span>
                <span className="sr-only">{changeCurrencyText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function DesktopMenu({
  activeTab,
  setActiveTab,
  navigation,
  shopNowText,
}: MegaMenuDesktopMenuProps) {
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.categories &&
          navigation.categories.map((category) => (
            <div key={category.name} className="flex">
              <div className="relative flex">
                <Link
                  onClick={() =>
                    setActiveTab(
                      activeTab === category.name ? '' : category.name
                    )
                  }
                  className={`relative z-10 -mb-px flex items-center border-b-2 ${
                    activeTab === category.name
                      ? 'border-menu-dark/90 text-menu-dark'
                      : 'text-menu-dark/70 border-transparent'
                  } hover:text-menu-dark hover:border-menu-dark/80 pt-px transition-colors duration-200 ease-out`}
                  href={'#'}
                  underlineHover={false}
                >
                  {category.name}
                </Link>
              </div>
              {activeTab === category.name && (
                <div className="text-menu-dark absolute inset-x-0 top-full">
                  <div
                    aria-hidden="true"
                    className="bg-menu-background from-menu-from_background to-menu-to_background absolute inset-0 top-1/2 bg-gradient-to-r shadow-sm"
                  />
                  <div className="bg-menu-background from-menu-from_background to-menu-to_background relative bg-gradient-to-r">
                    <div className="mx-auto max-w-7xl px-8">
                      <div
                        className={`${category.featured ? 'grid grid-cols-2 gap-x-8 gap-y-10' : ''} py-16`}
                      >
                        {category.featured && (
                          <div className="col-start-2 grid grid-cols-3 gap-x-8">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="sm: group relative text-base"
                              >
                                <Img
                                  alt={item.imageAlt}
                                  src={item.imageSrc}
                                  className="bg-menu-light aspect-square w-full rounded-lg object-cover group-hover:opacity-75"
                                />
                                <Link
                                  href={item.href}
                                  className="text-menu-dark/90 hover:text-menu-dark/50 mt-6 block"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0 z-10"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1">
                                  {shopNowText}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10">
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${section.name}-heading`}
                                className="text-menu-dark"
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
                                    <Link
                                      href={item.href}
                                      className="text-menu-dark/90 hover:text-menu-dark/50"
                                      target="_blank"
                                      underlineHover={false}
                                    >
                                      {item.name}
                                    </Link>
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
              )}
            </div>
          ))}
        {navigation.pages &&
          navigation.pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className="text-menu-dark/90 hover:text-menu-dark/50 flex items-center"
            >
              {page.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default function MegaMenuNavBar({
  navigation,
  freeDeliveryText,
  signInText,
  createAccountText,
  changeCurrencyText,
  currency,
  searchBox,
  logoSrc,
  logoAlt,
}: MegaMenuNavBarComponentProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  return (
    <div>
      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigation={navigation}
        closeMenuText="Close menu"
        shopNowText=""
        signInText={signInText || ''}
        createAccountText={createAccountText || ''}
        changeCurrencyText={changeCurrencyText || ''}
        currency={currency || ''}
      />
      <header className="bg-menu-background from-menu-from_background to-menu-to_background relative bg-gradient-to-r">
        {freeDeliveryText && (
          <p className="bg-menu-dark/90 text-menu-light/80 flex h-10 items-center justify-center p-2 sm:py-6 lg:px-8">
            {freeDeliveryText}
          </p>
        )}
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-menu-dark border-b">
            <div className="flex h-20 items-center">
              <Link
                onClick={() => setOpen(true)}
                className="text-menu-dark bg-menu-light relative rounded-md p-2 lg:hidden"
                href={'#'}
              >
                <span className="sr-only">Menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </Link>
              <div className="ml-4 flex lg:ml-0">
                <Button variant="icon" href="/">
                  <span className="sr-only">{logoAlt}</span>
                  <Img alt={logoAlt} src={logoSrc} className="h-8 w-auto" />
                </Button>
              </div>
              <DesktopMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                navigation={navigation}
                shopNowText=""
              />
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {signInText && (
                    <>
                      <Link
                        href="#"
                        underlineHover={false}
                        className="text-menu-dark/90 hover:text-menu-dark/50"
                      >
                        {signInText}
                      </Link>
                      <span
                        aria-hidden="true"
                        className="bg-menu-light h-6 w-px"
                      />
                    </>
                  )}
                  {createAccountText && (
                    <Link
                      href="#"
                      underlineHover={false}
                      className="text-menu-dark/90 hover:text-menu-dark/50"
                    >
                      {createAccountText}
                    </Link>
                  )}
                </div>
                {currency && (
                  <div className="hidden lg:ml-8 lg:flex">
                    <a
                      href="#"
                      className="text-menu-dark/80 hover:text-menu-dark/90 flex items-center"
                    >
                      <Img
                        alt=""
                        src="/images/avatar.jpg"
                        className="block h-auto w-5 shrink-0"
                      />
                      <span className="ml-3 block">{currency}</span>
                      <span className="sr-only">{changeCurrencyText}</span>
                    </a>
                  </div>
                )}
                {searchBox && (
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="text-menu-dark/90 hover:text-menu-dark/50 p-2"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
