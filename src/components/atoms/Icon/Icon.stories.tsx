import Icon from './index';

const iconOptions = [
  'search',
  'openEye',
  'closeEye',
  'phone',
  'envelop',
  'user',
  'facebook',
  'home',
  'bell',
  'cog',
  'close',
  'check',
];

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: iconOptions,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'solid'],
      },
    },
    customClassNames: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    name: 'search',
    variant: 'outline',
  },
};

export const AllIcons = () => (
  <div className="flex flex-wrap gap-4">
    {iconOptions.map((icon) => (
      <div key={icon} className="flex flex-col items-center gap-2">
        <Icon
          name={icon}
          variant="outline"
          customClassNames="text-primary-dark transition-all hover:text-primary"
        />
        <Icon
          name={icon}
          variant="solid"
          customClassNames="text-primary-dark transition-all hover:text-primary"
        />
        <span>{icon}</span>
      </div>
    ))}
  </div>
);
