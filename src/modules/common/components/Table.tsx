import React from 'react';

interface TableProps {}

export const Table: React.FC<TableProps> = () => {
  return (
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                1
              </td>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                Test
              </td>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                10
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
