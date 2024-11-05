import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ row, config, index }) => {
    const rowClass = index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]';
    const hoverClass = 'hover:bg-[#F8F9FA] transition-colors duration-300';

    return (
        <tr className={`${hoverClass} ${rowClass}`}>
            {config.map((column, colIndex) => (
                <TableCell key={colIndex} column={column} row={row} isOddRow={index % 2 !== 0} />
            ))}
        </tr>
    );
};

export default TableRow;
