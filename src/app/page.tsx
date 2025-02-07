"use client"

import React, { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';

type TShirtColor = 'white' | 'black' | 'red';
type TShirtSize = 'S' | 'M' | 'L';

interface InventoryItem {
  id: number;
  name: string;
  color: TShirtColor;
  size: TShirtSize;
  quantity: number;
  max: number;
}

interface TShirtIconProps {
  color: TShirtColor;
  isExpanded: boolean;
}

// Tab switcher component for Inventory/Order Queue views
const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div className="bg-[#E6E6E6] rounded-lg inline-flex relative p-1">
      <div
        className={`absolute bg-white rounded-customBorders border border-gray-300 shadow-sm transition-transform duration-300 ease-out inset-y-1 ${activeTab === 'inventory' ? 'left-1' : 'right-1'
          }`}
        style={{ width: 'calc(50% - 4px)' }}
      />

      <button
        onClick={() => setActiveTab('inventory')}
        className={`px-4 py-1.5 text-sm font-medium relative z-10 w-1/2 text-center ${activeTab === 'inventory' ? 'text-[#262626]' : 'text-[#808080]'
          }`}
      >
        Inventory
      </button>

      <button
        onClick={() => setActiveTab('queue')}
        className={`px-4 py-1.5 text-sm font-medium relative z-10 w-1/2 flex justify-center items-center ${activeTab === 'queue' ? 'text-[#262626]' : 'text-[#808080]'
          }`}
      >
        Order&nbsp;Queue
      </button>
    </div>
  );
};

// T-shirt icon component with color and SVG mapping
const TShirtIcon: React.FC<TShirtIconProps> = ({ color, isExpanded }) => {
  const colorMap: Record<TShirtColor, string> = {
    white: 'bg-[#333333]',
    black: 'bg-[#FAFAFA]',
    red: 'bg-[#FAFAFA]'
  };

  const iconMap: Record<TShirtColor, string> = {
    white: '/whiteShirt.svg',   // Replace with the correct path for the white icon
    black: '/blackShirt.svg',   // Replace with the correct path for the black icon
    red: '/redShirt.svg'        // Replace with the correct path for the red icon
  };


  return (
    <div className={`w-12 h-12 rounded border ${colorMap[color]} flex items-center justify-center`}>
      <img
        src={iconMap[color]}
        alt={`${color} icon`}
        className="w-8 h-8 object-contain"
      />
    </div>
  );
};

// Main inventory management component
const InventoryManagement: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('inventory');
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([
    { id: 1, name: 'Gildan T-Shirt - Red / M', color: 'red', size: 'M', quantity: 13, max: 24 },
    { id: 2, name: 'Gildan T-Shirt - Red / L', color: 'red', size: 'L', quantity: 46, max: 24 },
    { id: 3, name: 'Gildan T-Shirt - Black / S', color: 'black', size: 'S', quantity: 21, max: 24 },
    { id: 4, name: 'Gildan T-Shirt - Black / M', color: 'black', size: 'M', quantity: 34, max: 24 },
    { id: 5, name: 'Gildan T-Shirt - Black / L', color: 'black', size: 'L', quantity: 27, max: 24 },
    { id: 6, name: 'Gildan T-Shirt - White /S', color: 'white', size: 'S', quantity: 34, max: 24 },
    { id: 7, name: 'Gildan T-Shirt - White / M', color: 'white', size: 'M', quantity: 51, max: 24 },
    { id: 8, name: 'Gildan T-Shirt - White / L', color: 'white', size: 'L', quantity: 29, max: 24 }
  ]);

    // Quantity update handler with bounds checking
  const handleQuantityChange = (id: number, increment: boolean) => {
    setInventoryData(prevData =>
      prevData.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + (increment ? 1 : -1)) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`max-w-6xl mx-auto rounded-lg px-8 pt-9`}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 font-UncutSansMedium text-2xl pl-1">
            <h1 className="text-blackColor">Materials</h1>
            <span className="text-grayColor">/</span>
            <span className="text-grayColor">Blanks</span>
          </div>
          <TabSwitcher />
        </div>

        {activeTab === 'inventory' ? (
          <div className="bg-white rounded-lg shadow-sm p-4 pt-5 border">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4 flex-1 max-w-md mr-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search Materials"
                    className="w-full pl-10 pr-4 pt-2 pb-2 border border-gray-200 rounded-customBorders text-sm"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/slider.svg"
                    className="w-6 h-6 object-contain"
                  />
                  <img
                    src="/arrows.svg"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <button className="ml-4 px-4 py-2 bg-logo text-white rounded-customBorders text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            <div className="space-y-3">
              {inventoryData.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3">
                    <TShirtIcon color={item.color} isExpanded={isExpanded} />
                    <span className="text-sm text-gray-900">{item.name}</span>
                  </div>
                  <div className="flex items-center border rounded-customBorders">
                    <button
                      onClick={() => handleQuantityChange(item.id, false)}
                      className="w-11 text-gray-400 hover:text-gray-600 flex justify-center"
                    >
                      <img
                        src="/Minus.svg"
                        className="w-5 h-5 object-contain"
                      />
                    </button>

                    <div className={`w-24 ${item.quantity < item.max ? 'border border-[#C19A4D]' : 'border-l border-r'
                      }`}>
                      <div className={`flex justify-center items-center font-chivo-mono font-thin text-[18px] h-7 ${item.quantity < item.max ? 'bg-[#FAF2E3]' : ''
                        }`}>
                        {item.quantity}
                      </div>

                      <div className={`text-[11px] font-chivo-mono font-thin text-gray-400 flex items-center justify-center border-t h-4 ${item.quantity < item.max ? 'bg-[#C19A4D] text-white border-none' : 'bg-lightGray'
                        }`}>
                        {item.max} PCS
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuantityChange(item.id, true)}
                      className="w-11 text-gray-400 hover:text-gray-600 flex justify-center"
                    >
                      <img
                        src="/Plus.svg"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <p>Order Queue Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryManagement;