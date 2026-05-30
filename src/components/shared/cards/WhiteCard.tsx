import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  centered?: boolean
  className?: string
}

export const WhiteCard = ({ children, centered, className }: Props) => {
  return (
    <div
      className={classNames(
        'shadow-3xl shadow-shadow-500 w-full rounded-[20px] border bg-white p-10',
        className,
        {
          'text-center': centered,
          'flex flex-col items-center': centered,
        },
      )}
    >
      {children}
    </div>
  )
}
