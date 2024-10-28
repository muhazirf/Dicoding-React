import React from 'react';

export function TabComponent({ tabs, selectedTab, onTabChange }) {
    return (
        <div className="tab-container mb-2">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center dark:text-white">
                {tabs.map((tab) => (
                    <li key={tab.id} className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === tab.id ? 'border-purple-600' : 'border-transparent'
                                }`}
                            onClick={() => onTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
