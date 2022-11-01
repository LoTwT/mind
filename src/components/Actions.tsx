interface InputProps {
  label: string
  name: string
}

export const Input = ({ label, name }: InputProps) => {
  return (
    <div>
      <label for="email" sr-only>{label}</label>
      <div relative>
        <input
          type={name}
          w-full rounded-lg border-gray-200 dark:border-gray-800 border-1 p-4 pr-12 text-sm shadow-sm
          dark:bg-gray-500 dark:outline-none
          placeholder={`Please type ${label}`}
        />
      </div>
    </div>
  )
}

export const ImportDialog = () => {
  return (
    <div py-5>
      <Input label="website link" name="website-link" />
    </div>
  )
}
