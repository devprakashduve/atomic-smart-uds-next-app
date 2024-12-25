import { Field, Label, Switch } from '@headlessui/react';
import { AgreementFieldProps } from './AgreementField.interface';
import './../../../../app/globals.css';

// Agreement Field Component
const AgreementField = (props: AgreementFieldProps) => {
  const { agreed, setAgreed } = props;

  return (
    <Field className="flex gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className="data-checked:bg-indigo-600 group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <span className="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            className="shadow-xs group-data-checked:translate-x-3.5 size-4 transform rounded-full bg-white ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
          />
        </Switch>
      </div>
      <Label className="text-sm/6 text-gray-600">
        By selecting this, you agree to our{' '}
        <a href="#" className="font-semibold text-indigo-600">
          privacy&nbsp;policy
        </a>
        .
      </Label>
    </Field>
  );
};

export default AgreementField;
