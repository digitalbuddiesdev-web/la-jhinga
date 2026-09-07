import React from 'react';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  className = ''
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-[#5BC5D2]" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF8F72]">
            {subtitle}
          </span>
          <span className="h-px w-6 bg-[#5BC5D2]" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#014E68] font-serif">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#0A2E3A]/85">
          {description}
        </p>
      )}
    </div>
  );
}
