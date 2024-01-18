import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const AddMaster = () => {
    const [formData, setFormData] = useState({
        itemCode:"",
        itemName:""
    })


    const handleChangeInput = (event) => {
        const { name, value } = event.target
        setFormData((pre) => ({
             ...pre,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            
            const response = await axios.post("http://localhost:5000/items",formData)
            
            response.data.success ? toast.success(response.data.message) : toast.error(response.data.message)
            
        } catch (error) {
            console.log(error)
            toast.error("somthing went wrong in catch")
            
        } 
    };
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <div className='flex justify-center  font-serif font-bold text-2xl' >
                Add Master Item
            </div>
            <fieldset className="p-10 grid grid-cols-3 gap-6  rounded-sm shadow-sm dark:bg-gray-900">
                <form onSubmit={handleSubmit}>
                <div className="col-span-full sm:col-span-2">
                    
                    <label for="zip" className="text-sm">Item Code:</label>
                    <input onChange={handleChangeInput} id="zip" type="text" name='itemCode' placeholder="" className="w-full p-1 rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">Item Name:</label>
                    <input onChange={handleChangeInput} id="firstname" type="text" name='itemName' className="p-1 w-full rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                </div>
                <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Add</button>
                </form>

            </fieldset>


        </section>)
}

export default AddMaster