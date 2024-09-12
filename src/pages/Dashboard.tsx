import React from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

const DashboardButton: React.FC<{
  title: string
  description: string
  onClick: () => void
}> = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-thin tracking-wide text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isChildRoute = location.pathname !== '/dashboard'

  return (
    <div className="mx-auto md:px-16 px-4 mt-12">
      {!isChildRoute && (
        <>
          <h2 className="text-4xl font-thin text-center mb-10 tracking-wide text-gray-900">
            Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
            <DashboardButton
              title="Orders"
              description="View and manage customer orders, track statuses, and handle returns."
              onClick={() => navigate('/dashboard/orders')}
            />
            <DashboardButton
              title="Products"
              description="Manage your product inventory, update details, and track stock levels."
              onClick={() => navigate('/dashboard/products')}
            />
            <DashboardButton
              title="Create Product"
              description="Add new products to your catalog, including details like pricing and images."
              onClick={() => navigate('/dashboard/create-product')}
            />
          </div>
        </>
      )}

      <Outlet />
    </div>
  )
}

export default Dashboard
