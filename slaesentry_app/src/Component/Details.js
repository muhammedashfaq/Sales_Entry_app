import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRow } from '../Redux/actionSlice'
const Details = () => {
	const [status, setStatus] = useState('')
	const { numbers, rows } = useSelector((state) => state.details);
	const despach = useDispatch()

	const handleDeleteRow = (srNO) => {
		despach(deleteRow(srNO))
	}


	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	return (
		<>
			<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
				<div className='flex justify-center p-1 font-serif font-bold text-2xl' >
					Header
				</div>
				<fieldset className="p-10 grid grid-cols-3 gap-6  rounded-sm shadow-sm dark:bg-gray-900">
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

						<div className="col-span-full sm:col-span-2">
							<label for="city" className="text-sm">Vr NO:</label>
							<input id="city" type="text" placeholder="" className="w-full p-1 rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label for="state" className="text-sm">Vr Date:</label>
							<input id="state" type="Date" placeholder="" className="w-full p-1 rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="status" className="text-sm">
								Status:
							</label>
							<select
								id="status"
								value={status}
								onChange={handleStatusChange}
								className="w-full p-1 rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
							>
								<option value="">Select Status</option>
								<option value="A">Active</option>
								<option value="I">Inactive</option>
							</select>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label for="firstname" className="text-sm">Ac Name :</label>
							<input id="firstname" type="text" className="p-1 w-full rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label for="zip" className="text-sm">Ac Amt:</label>
							<input id="zip" type="text" placeholder="" className="w-full p-1 rounded-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
						</div>


					</div>
				</fieldset>
			</section>
			<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 ">
				<h2 className="flex justify-center p-1 font-serif font-bold text-2xl dark:text-gray-900">Details</h2>
				<div className="overflow-x-auto ">
					<table className="min-w-full text-xs">

						<thead className="dark:bg-gray-700">
							<tr className="text-left">
								<th className="p-3">Sr NO</th>
								<th className="p-3">Item Code</th>
								<th className="p-3">Item Name</th>
								<th className="p-3">Qty</th>
								<th className="p-3 text-right">Amount</th>
								<th className="p-3 text-right">Row</th>

							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr key={row.srNo} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
									<td className="p-3">
										<p>
											{row.srNo}
										</p>
									</td>
									<td className="p-3 text-black">
										<input type='text' className='p-1' />
										{/* <p>{row.itemCode}</p> */}
									</td>
									<td className="p-3 text-black">
										<input type='text' className='p-1' />

										{/* <p>{row.itemName}</p> */}
									</td>
									<td className="p-3">
										<input type='text' className='p-1' />

										{/* <p>{row.qty}</p> */}
									</td>
									<td className="p-3 text-right">
										<input type='text' className='p-1' />

										{/* <p>{row.amount}</p> */}
									</td>
									<td className="p-3 text-right">
										<button onClick={() => handleDeleteRow(row.srNo)}>

											<span class="material-symbols-outlined">
												delete_forever
											</span>
										</button>
										{/* <p>{row.amount}</p> */}
									</td>
								</tr>

							))}
							<tr className='className="border-b border-opacity-20 dark:border-gray-700 bg-gray-900'>
								<td className="p-3">
									<p>
									</p>
								</td>
								<td className="p-3">
									{/* <p>{row.itemCode}</p> */}
								</td>
								<td className="p-3 text-black">

									{/* <p>{row.itemName}</p> */}
								</td>
								<td className="p-3">
									<label className='p-0 text-2xl'>Total :-</label>

									{/* <p>{row.qty}</p> */}
								</td>
								<td className="p-3 text-right">
									<input type='text' className='p-1' />

									{/* <p>{row.amount}</p> */}
								</td>
								<td className="p-3 text-right">

									{/* <p>{row.amount}</p> */}
								</td>
							</tr>


						</tbody>
					</table>
				</div>
			</div>

		</>
	)
}

export default Details
