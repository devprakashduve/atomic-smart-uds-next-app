import Spinner from './index';

export default {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
};

export const WithCSS = {
  args: {
    width: 50,
    height: 50,
    color: 'currentColor',
    variant: 'css',
  },
};

export const WithSVG = {
  args: {
    width: 96,
    height: 96,
    color: 'currentColor',
    variant: 'svg',
  },
};

export const customLoader = {
  args: {
    width: 96,
    height: 96,
    color: 'currentColor',
    variant: 'svg',
    customLoader: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <linearGradient id="a8">
          <stop offset="0" stop-color="#FF156D" stop-opacity="0"></stop>
          <stop offset="1" stop-color="#FF156D"></stop>
        </linearGradient>
        <circle
          fill="none"
          stroke="url(#a8)"
          stroke-width="30"
          stroke-linecap="round"
          stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
          cx="100"
          cy="100"
          r="70"
          transform-origin="center"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="discrete"
            dur="2"
            values="360;324;288;252;216;180;144;108;72;36"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    ),
  },
};
