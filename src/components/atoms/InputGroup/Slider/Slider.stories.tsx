import Slider from '.';

export default {
  title: 'Components/Atoms/InputGroup/Slider',
  component: Slider,
};

export const BasicSlider = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    onChange: (value: any) => console.log(value),

    disabled: false,
  },
};

export const DisabledSlider = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    onChange: (value: any) => console.log(value),
    color: 'blue',
    disabled: true,
  },
};

export const CustomStepSlider = {
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 5,
    onChange: (value: any) => console.log(value),
    color: 'blue',
    disabled: false,
  },
};

export const CustomHeight = {
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 5,
    onChange: (value: any) => console.log(value),
    color: 'blue',
    disabled: false,
    customClassNames: 'h4',
  },
};
