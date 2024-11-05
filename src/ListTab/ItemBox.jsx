import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ItemBox({ name, id }, ref) {
    const [state, setState] = useState({ title: '', des: '' });

    useImperativeHandle(ref, () => ({
        getMyState: () => state
    }), [state]);

    const handleChangeState = (field, value) => {
        setState(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <div className='border border-solid p-2 border-gray- rounded-lg'>
            <h3 className='mb-0'>{name}</h3>
            <div className='flex flex-col gap-y-1 mt-2'>
                <div className='flex gap-1 flex-col'>
                    <label htmlFor="name">title</label>
                    <input
                        type="text"
                        id="title"
                        className='w-full !outline-none border border-solid min-h-8 rounded-md p-2'
                        value={state.title}
                        onChange={(e) => handleChangeState('title', e.target.value)}
                    />
                </div>
                <div className='flex gap-1 flex-col'>
                    <label htmlFor="des">des</label>
                    <input
                        type="text"
                        id="des"
                        className='w-full !outline-none border border-solid min-h-8 rounded-md p-2'
                        value={state.des}
                        onChange={(e) => handleChangeState('des', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default forwardRef(ItemBox);
