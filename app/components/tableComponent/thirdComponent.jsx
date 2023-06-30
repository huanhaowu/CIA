"use client";
export default function ThirdTable({ data }) {
  const headers = Object.keys(data[0] || {});

  return (
    <table className=" w-full">
      <thead>
        <tr className="bg-[#F5F5F5]">
          {headers.map((header, index) => (
            <th key={index} className=" text-left px-4 py-2">
              {header}
            </th>
          ))}
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, index) => (
              <td key={index} className=" px-4 py-2">
                {row[header]}
              </td>
            ))}
            <td className=" px-4 py-2">
              <button>+</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
