const Body = ({ dataTableList }) => {
  return (
    <div className="flex flex-grow flex-wrap justify-center h-60">
      {dataTableList.map((dataTable, index) => (
        <div key={index} className="m-2">
          {dataTable}
        </div>
      ))}
    </div>
  );
};

export default Body;
