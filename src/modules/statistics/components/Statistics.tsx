import React from 'react';
import { Table } from 'modules/common';

// interface StatisticsProps {}

export const Statistics: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700">Statistics</h3>
      <div style={{ left: '20px' }} className="flex flex-col mt-8">
        <Table />
      </div>
    </div>
  );
};
