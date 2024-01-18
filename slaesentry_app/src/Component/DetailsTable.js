import React from 'react'

const DetailsTable = () => {
  return (
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="flex justify-center p-1 font-serif font-bold text-2xl dark:text-gray-900">Details</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Sr NO</th>
					<th className="p-3">Item Code</th>
					<th className="p-3">Item Name</th>
					<th className="p-3">Qty</th>
					<th className="p-3 text-right">Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					
				</tr>
				
				
			</tbody>
		</table>
	</div>
</div>  )
}

export default DetailsTable