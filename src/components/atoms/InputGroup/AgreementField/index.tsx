import { Field, Label, Switch } from '@headlessui/react';
import { AgreementFieldProps } from './AgreementField.interface';
import './../../../../app/globals.css';

export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter(Boolean).join(' ');
}
// Agreement Field Component
const AgreementField = (props: AgreementFieldProps) => {
  const { agreed, setAgreed } = props;

  return (
    <Field className="flex gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <div className="flex h-full w-screen items-start justify-center bg-gray-50 p-12">
          <Label className="px-2 text-sm/6 text-gray-600">
            Enable notifications
          </Label>

          <Switch
            as="button"
            checked={agreed}
            onChange={setAgreed}
            className={({ checked }) =>
              classNames(
                `focus:shadow-outline relative inline-flex h-${6} w-${11} flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`,
                checked
                  ? 'bg-indigo-600 hover:bg-indigo-800'
                  : 'bg-gray-200 hover:bg-gray-400'
              )
            }
          >
            {({ checked }) => (
              <>
                <span
                  className={classNames(
                    'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                    checked ? 'translate-x-5' : 'translate-x-0'
                  )}
                />
              </>
            )}
          </Switch>
          <Label className="px-2 text-sm/6 text-gray-600">
            By selecting this, you agree to our{' '}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Label>
        </div>
      </div>
    </Field>
  );
};

export default AgreementField;
