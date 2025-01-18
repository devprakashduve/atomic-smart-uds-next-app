import React from 'react';
import Button from '.';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

export const Simple = {
  args: {
    variant: 'btn-simple',
    disabled: false,
    children: 'Submit',
  },
};

export const Pill = {
  args: {
    variant: 'btn-pill',
    disabled: false,
    children: 'Submit',
    roundedFull: true,
  },
};

export const PillOutline = {
  args: {
    roundedFull: true,
    variant: 'btn-pill-outline',
    disabled: false,
    children: (
      <>
        <span>Download</span>
        <svg
          className="ml-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </>
    ),
  },
};

export const Outline = {
  args: {
    rounded: true,
    variant: 'btn-outline',
    children: 'submit',
  },
};

export const Bordered = {
  args: {
    rounded: true,
    variant: 'btn-bordered',
    children: 'Submit',
  },
};

export const Disabled = {
  args: {
    rounded: true,
    variant: 'btn-disabled',
    children: 'Submit',
  },
};

export const ThreeD = {
  args: {
    rounded: true,
    variant: 'btn-three-d',
    children: 'Submit',
  },
};

export const Elevated = {
  args: {
    rounded: true,
    variant: 'btn-elevated',
    children: 'Submit',
  },
};

export const Groups = {
  args: {
    variant: 'btn-groups',
    children: 'Submit',
  },
};

export const Icons = {
  args: {
    variant: 'btn-icon',
    children: (
      <>
        <svg
          className="mr-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </>
    ),
    disabled: false,
  },
};

export const ButtonLink = {
  args: {
    variant: 'btn-link',
    children: (
      <>
        <span>Download</span>

        <svg
          className="ml-2 h-6 w-6 fill-current"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </>
    ),
    disabled: false,
    isLink: true,
  },
};
