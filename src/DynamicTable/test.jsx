import React, { useState } from 'react';
import DynamicTable from '.';
import { generateUUID } from '../utils';

const generateRandomData = (num) => {
    const data = [];
    const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jack"];
    const schools = ["School A", "School B", "School C", "School D", "School E"];

    const createBatch = (batchSize, startId) => {
        const batch = [];
        for (let i = 0; i < batchSize; i++) {
            const id = generateUUID();
            const name = names[Math.floor(Math.random() * names.length)] + ' ' + (startId + i);
            const age = Math.floor(Math.random() * (18 - 10 + 1)) + 10;
            const price = (Math.random() * 1000).toFixed(2);
            const school = schools[Math.floor(Math.random() * schools.length)];
            const phoneNumber = `0${Math.floor(Math.random() * 1000000000)}`;

            batch.push({ id, name, age, price, school, phoneNumber });
        }
        return batch;
    };

    const tasks = 10;
    const batchSize = Math.floor(num / tasks);

    let completedTasks = 0;

    const handleTask = (taskIndex) => {
        const startId = taskIndex * batchSize;
        const batchData = createBatch(batchSize, startId);
        data.push(...batchData);

        completedTasks++;
        if (completedTasks < tasks) {
            setTimeout(() => handleTask(completedTasks), 0);
        }
    };

    handleTask(0);
    return data;
};

// todo: paging, search, sort, drag drop
const TestDynamicTable = () => {
    const [data, setData] = useState(generateRandomData(10000))
    const config = [
        {
            title: 'ID',
            fieldMapping: 'id',
        },
        {
            title: 'Name',
            fieldMapping: 'name',
        },
        {
            title: 'Phone Number',
            fieldMapping: 'phoneNumber',
        },
        {
            title: 'AGE',
            fieldMapping: 'age',
        },
        {
            title: 'School',
            fieldMapping: 'school',
        },
        {
            title: 'Price',
            fieldMapping: 'price',
        },
    ];

    return (
        <div className='w-full overflow-auto '>
            <h1 className='mb-10'>Dynamic Table Example</h1>
            <DynamicTable
                config={config}
                data={data}
            />
        </div>
    );
};

export default TestDynamicTable;
