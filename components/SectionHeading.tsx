
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-4">
        <span className="h-1 w-12 bg-indigo-500 rounded-full hidden md:block"></span>
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
