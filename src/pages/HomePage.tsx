export default function HomePage () {
  return (
   <div className="px-4">
    <div className="grid gap-4 grid-cols-3 mb-4">
      <div className="p-6 border border-neutral-100 shadow-xs bg-warning-50 rounded-lg">
        <h2 className="text-3xl leading-none font-bold mb-3">19</h2>
        <p className="text-neutral-600">Total Approval Requests</p>
      </div>

      <div className="p-6 border border-neutral-100 shadow-xs bg-success-50 rounded-lg">
        <h2 className="text-3xl leading-none font-bold mb-3">29</h2>
        <p className="text-neutral-600">Total Assesment Requests</p>
      </div>

      <div className="p-6 border border-neutral-100 shadow-xs bg-primary-50 rounded-lg">
        <h2 className="text-3xl leading-none font-bold mb-3">39</h2>
        <p className="text-neutral-600">Total Users</p>
      </div>
    </div>

    
   </div>
  )
}
