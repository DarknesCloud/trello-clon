interface ITileProps {
  children: React.ReactNode
  opacity: string | undefined
}

export const Tile: React.FC<ITileProps> = ({ children, opacity }) => {
  return (
    <div
      className={`bg-white py-2 px-2 mb-2 transition-shadow shadow-lg rounded ${opacity}`}
    >
      <p className="text-sm">{children}</p>
    </div>
  )
}
