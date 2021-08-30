import React from 'react'

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

export const Input = React.forwardRef(
  ({ label, id, ...props }: IInputProps, ref: any) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg text-gray-800 font-semibold">
        {label}
      </label>
      <input
        className="flex flex-1 flex-grow px-6 py-2 border rounded-xl bg-gray-100 text-gray-800 focus:outline-none focus:ring"
        type="text"
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  )
)
