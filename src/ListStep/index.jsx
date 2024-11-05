import React from 'react'
import ContainerStepActive from './ContainerStepActive'
import ProviderListStep from './context/provider'
import TabSteps from './TabSteps'

export default function ListStep() {
    return (
        <ProviderListStep>
            <div className='flex flex-col gap-6'>
                <TabSteps />
                <ContainerStepActive />
            </div>
        </ProviderListStep>
    )
}
