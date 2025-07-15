import type { TabItem } from '@/types';
import { useState } from 'react';
type TabsProps = {
    tabs: TabItem[]
}
export const Tabs = ({ tabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='tabs lg:w-3/7 '>
            <div className=' flex flex-col lg:flex-row justify-between border-b border-gray-200 mb-2'>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        role="tab"
                        onClick={() => setActiveTab(index)}
                        className={`px-8 py-4 text-sm font-normal focus:outline-none
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
            <div className="content">{tabs[activeTab].content}</div>
        </div>
    )
}
