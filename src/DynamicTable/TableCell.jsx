import React from 'react';

const TableCell = ({ column, row, isHeader }) => {
    const cellData = isHeader ? column.title : row[column.fieldMapping];
    const cellContent = column.render ? column.render(cellData, row) : cellData;

    return (
        <td className={`px-[16px] py-[14px] ${column.className}`}>
            {cellContent}
        </td>
    );
};

export default TableCell;
