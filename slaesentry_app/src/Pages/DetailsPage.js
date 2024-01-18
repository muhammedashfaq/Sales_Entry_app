import Details from '../Component/Details'
import React, { useState } from 'react'
import Button from '../Component/Button'
import DetailsTable from '../Component/DetailsTable'
import AddMaster from '../Component/AddMaster'
 
const DetailsPage = () => {
    const [tabItem, setTabItem] = useState("sales")
    return (
        <div className='container h-screen w-screen flex justify-center items-center '>
            <div className='w-screen  h-full '>
                <div className="flex overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
                    <a onClick={() => setTabItem("sales")} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabItem === 'sales'
                            ? 'border border-b-0 rounded-t-lg  text-white'
                            : 'dark:border-gray-400 dark:text-gray-400'
                        }`}>
                        <span>Sales Entry</span>
                    </a>
                    <a onClick={() => setTabItem("details")} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabItem === 'details'
                            ? 'border border-b-0 rounded-t-lg  text-white'
                            : 'dark:border-gray-400 dark:text-gray-400'
                        }`}>
                        <span>Details Table</span>
                    </a>
                    <a onClick={() => setTabItem("masteritem")} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabItem === 'masteritem'
                            ? 'border border-b-0 rounded-t-lg  text-white'
                            : 'dark:border-gray-400 dark:text-gray-400'
                        }`}>
                        <span>Master Item</span>
                    </a>
                </div>
                <div className='bg-white p-8 rounded shadow-md'>
                    {tabItem === "sales" && (
                        <>
                            <Details />
                            <Button  />
                        </>)}
                    {tabItem === "details" && (
                        <DetailsTable />
                    )}
                    {tabItem === "masteritem" && (
                        <AddMaster />
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailsPage