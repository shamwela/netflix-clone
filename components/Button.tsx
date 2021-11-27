const primaryButtonColors = 'bg-white hover:bg-dark-white text-black'
const secondaryButtonColors = 'bg-gray hover:bg-dark-gray text-white'

const Button = ({
  type = 'primary',
  children,
}: {
  type: 'primary' | 'secondary'
  children: React.ReactNode
}) => {
  const colors =
    type === 'primary' ? primaryButtonColors : secondaryButtonColors

  return (
    <button
      className={'px-5 py-2 font-bold rounded-custom flex gap-x-4 items-center ' + colors}
      style={{ fontSize: '0.95rem' }}
    >
      {children}
    </button>
  )
}

export default Button
