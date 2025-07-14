import type { TabItem } from '@/components/product/types';
import { useState } from 'react';
type TabsProps = {
    tabs: TabItem[]
}
export const Tabs = ({ tabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='w-3/7'>
            <div className='flex flex-row justify-between border-b border-gray-200 mb-2'>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(index)}
                        className={`px-8 py-2 text-sm font-normal focus:outline-none
                            ${activeTab === index
                                ? 'border-b-2 border-black text-black'
                                : 'text-gray-400'
                            }
              transition-all`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
