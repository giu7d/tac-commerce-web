import React from 'react'

interface IParagraphSectionProps {
  title: string
}

export const ParagraphSection: React.FC<IParagraphSectionProps> = ({
  title,
  children
}) => (
  <div className="flex flex-col gap-6 md:align-center md:justify-center md:max-w-sm">
    <h4 className="text-lg font-semibold text-gray-800">
      {title}
      <div className="border border-gray-800 w-4" />
    </h4>
    <p>{children}</p>
  </div>
)
