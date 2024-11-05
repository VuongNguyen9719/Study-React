import React, { useCallback, useMemo, useRef, useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const tabs = [
    {
        name: 'Tab 1',
        component: Tab1
    },
    {
        name: 'Tab 2',
        component: Tab2
    },
    {
        name: 'Tab 3',
        component: Tab3
    },
];

export default function ListTab() {
    const [tabActive, setTabActive] = useState(0);
    const refChangeStateTab = useRef();
    const ComponentActive = useMemo(() => {
        return tabs?.find((_, index) => {
            return tabActive === index;
        })?.component;
    }, [tabActive]);

    const handleChangeTab = useCallback((index) => {
        const hasChanges = refChangeStateTab.current;
        if (typeof hasChanges == 'function' && hasChanges() && !window.confirm('Confirm')) {
            return;
        }
        setTabActive(index);
        refChangeStateTab.current = null;
    }, [refChangeStateTab.current]);

    return (
        <div className='flex flex-col gap-y-6'>
            <div className='flex gap-4'>
                {tabs.map(({ name }, index) => {
                    const isActive = index === tabActive;
                    return (
                        <button
                            key={index}
                            onClick={() => { handleChangeTab(index); }}
                            className={`p-2 rounded-lg border border-solid border-gray-300 ${isActive ? 'bg-black text-white' : ''}`}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>
            <ComponentActive
                ref={(ref) => {
                    if (typeof ref?.checkIsChange == 'function') {
                        refChangeStateTab.current = ref.checkIsChange
                    }
                }}
            />
            
        </div>
    );
}
