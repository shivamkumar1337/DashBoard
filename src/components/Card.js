const Card = () => {
  return (
    <div className="flex flex-col flex-grow bg-slate-500">
      <div className="h-2/6 bg-slate-900">section1</div>
      <div className="flex flex-grow bg-orange-100">
        <div className="flex-grow bg-red-200">div1</div>
        <div className="flex-grow bg-green-200">div2</div>
        <div className="flex-grow bg-blue-200">div3</div>
      </div>
    </div>
  );
};

export default Card;
