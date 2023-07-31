const Backdrop = ({ children, onClick }) => {
  return (
    <div
      className="absolute top-0 left-0, h-full w-full bg-[#000000e1] flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
