import React from 'react'

const Loding = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="flex flex-col items-center space-y-4">
    <div class="w-16 h-16 border-4 border-purple-400 border-dashed rounded-full animate-spin"></div>
    
    <p class="text-gray-600 text-lg font-medium">Loading, please wait...</p>
  </div>
</div>
  )
}

export default Loding