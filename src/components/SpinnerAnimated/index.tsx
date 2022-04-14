const SpinnerAnimated = () => {
  return (
    <div className="flex mt-8 flex-col m items-center justify-center">
      <div
        className="w-12 h-12 rounded-full animate-spin
          border-8 border-double border-blue-400 border-t-transparent"></div>
    </div>
  );
};

export default SpinnerAnimated;
