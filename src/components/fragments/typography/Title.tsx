import React from 'react'

export const Title: React.FC = ({ children }) => (
  <h4 className="text-lg font-semibold text-gray-800 md:text-2xl md:my-6">
    {children}
    <div className="border border-gray-800 w-4 md:border-2" />
  </h4>
)
