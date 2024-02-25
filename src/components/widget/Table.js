const Table = ({ data, headingColor }) => {
  return (
    <div className="h-fit w-fit">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className={`border-r px-1 text-center ${headingColor} w-2/6 truncate`}>Product</th>
            <th className={`border-r px-1 text-center ${headingColor} w-1/6 truncate`}>Q1-23</th>
            <th className={`border-r px-1 text-center ${headingColor} w-1/6 truncate`}>Q2-23</th>
            <th className={`border-r px-1 text-center ${headingColor} w-1/6 truncate`}>Q3-23</th>
            <th className={`px-1 text-center ${headingColor} w-1/6 truncate`}>Q4-23</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.Product}>
              <td className="border-r px-1 text-center truncate">{row.Product}</td>
              <td className="border-r px-1 text-center truncate">{row['Q1-23']}</td>
              <td className="border-r px-1 text-center truncate">{row['Q2-23']}</td>
              <td className="border-r px-1 text-center truncate">{row['Q3-23']}</td>
              <td className="px-1 text-center truncate">{row['Q4-23']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
