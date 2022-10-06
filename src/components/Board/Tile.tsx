interface ITileProps {
  children: React.ReactNode;
}

export const Tile: React.FC<ITileProps> = ({ children }) => {
  return (
    <div
      className="bg-white py-2 px-2 mb-2 
           transition-shadow shadow-lg rounded"
    >
      <p className="text-sm">{children}</p>
    </div>
  );
};
