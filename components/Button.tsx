const primaryButtonColors = 'bg-white hover:bg-darkWhite text-black'
const secondaryButtonColors = 'bg-gray hover:bg-darkGray text-white'

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
    <button className={'px-5 py-2 font-medium rounded ' + colors}>
      {children}
    </button>
  )
}

export default Button
