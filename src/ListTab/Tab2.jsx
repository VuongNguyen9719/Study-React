import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ItemBox from './ItemBox';

function Tab2(props, ref) {
    const refListBox = useRef({});

    const listBox = [
        { name: 'Airtalk', id: 1 },
        { name: 'AirVoice', id: 2 },
        { name: 'TAG Mobile', id: 3 },
    ];

    useImperativeHandle(ref, () => {
        return {
            checkIsChange: () => {
                let flag = false;
                for (const key in refListBox.current) {
                    if (Object.prototype.hasOwnProperty.call(refListBox.current, key)) {
                        const element = refListBox.current[key];
                        flag = Object.values(element).some(value => value);
                    }
                    if (flag) break;
                }
                return flag;
            }
        }
    })

    const handleSubmit = useCallback(() => {

    }, [refListBox.current]);

    return (
        <div className='flex flex-col gap-2'>
            {listBox.map(({ name, id }) => (
                <ItemBox
                    name={name}
                    key={id}
                    id={id}
                    ref={(ref) => {
                        if (ref && typeof ref.getMyState === 'function') {
                            refListBox.current[id] = ref.getMyState();
                        }
                    }}
                />
            ))}

            <button className='border border-solid border-[#e3e3e3] rounded-lg p-2 self-center' onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default forwardRef(Tab2)
