'use client';
import useState from 'react';

// CustomerCounter Component
export default function CustomerCounter({ count, setCount }) {
    const incrementCustomers = () => {
        setCount(count + 1);
        console.log('Customer added. New count:', count + 1);
    };

    const decrementCustomers = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log('Customer removed. New count:', count - 1);
        }
    };

    return (
        <div className="bg-[#F5E6D3] p-6 rounded-lg border-2 border-[#D2B48C]">
            <h2 className="text-xl font-bold text-[#5D4E37] mb-4">
                Customer Counter
            </h2>
            
            <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-[#5D4E37]">Current Customers:</span>
                <span className="text-3xl font-bold text-[#8B7355]">{count}</span>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={decrementCustomers}
                    disabled={count === 0}
                    className="flex-1 bg-[#8B7355] text-white px-4 py-2 rounded hover:bg-[#6D5A43] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    - Remove Customer
                </button>
                <button
                    onClick={incrementCustomers}
                    className="flex-1 bg-[#8B7355] text-white px-4 py-2 rounded hover:bg-[#6D5A43] transition-colors"
                >
                    + Add Customer
                </button>
            </div>
        </div>
    );
}


// onClick = ( () => {setCount(count + 1)})
