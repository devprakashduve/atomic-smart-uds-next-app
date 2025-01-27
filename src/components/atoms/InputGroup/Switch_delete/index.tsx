import React, { useState } from 'react';
import { SwitchProps } from './SwitchProps.interface';
import { classNames } from '@/Components/utilities/componentsMethods';

const Switch = (props: SwitchProps) => {
  const {
    textForOn,
    textForOff,
    disabled,
    checked,
    disableIcons,
    noBackground,
  } = props;
  const [enabled, setEnabled] = useState(checked);
  const switchClass = classNames(
    !noBackground
      ? enabled
        ? 'bg-line-light'
        : 'bg-line-light'
      : enabled
        ? 'border border-border'
        : 'border border-border-light'
  );
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          disabled={disabled}
        />
        {/* Switch Background */}
        <div
          className={`h-10 w-20 rounded-full shadow-inner transition-all ${
            switchClass
          }`}
        ></div>

        {/* Dot with Check Mark */}
        <div
          className={`absolute left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-line-dark shadow transition-all ${
            enabled ? 'translate-x-full' : ''
          }`}
        >
          {!disableIcons &&
            (enabled ? (
              <svg
                className="h-6 w-6 text-letter-dark dark:text-white"
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
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-letter-dark dark:text-white"
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
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ))}
        </div>
      </div>
      {/* Label */}
      <span className="ml-3">{enabled ? textForOn : textForOff}</span>
    </label>
  );
};

export default Switch;
