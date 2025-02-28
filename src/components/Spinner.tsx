const Spinner = () => {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <span className="absolute inline-block w-5 h-5 rounded-full border-2 border-blue-500 opacity-50 animate-ping"></span>
      <span className="absolute inline-block w-4 h-4 rounded-full border-2 border-blue-500 opacity-75 animate-ping [animation-delay:0.2s]"></span>
      <span className="relative inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
    </div>
  );
};

export default Spinner;
