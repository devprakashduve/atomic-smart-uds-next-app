import React from 'react';
import { HeroSectionProps } from './HeroSectionProps.interface';
import './HeroSection.css';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section
      className="hero-section relative flex flex-col items-center justify-center bg-cover bg-center py-32 text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
        <a
          href={ctaLink}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-700"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
