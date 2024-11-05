import React from 'react';
import TableRow from './TableRow';

const Table = ({
    config,
    data,

}) => {
    if (!data || data.length === 0) {
        return <div className="py-4 text-center">No data available</div>;
    }

    return (
        <table className="min-w-full overflow-auto border-collapse rounded-lg">
            <thead>
                <tr>
                    {config.map((column, index) => (
                        <th
                            key={index}
                            className={`px-[16px] py-[14px] text-left ${column.className}`}
                            style={{ width: column.width, backgroundColor: '#F0F8FF' }}
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex} row={row} config={config} index={rowIndex} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
