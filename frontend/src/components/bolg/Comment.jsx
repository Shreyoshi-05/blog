import React from 'react'

const Comment = () => {
  return (
    <div class="w-full max-w-lg mx-auto mt-10">
  
  <h2 class="text-2xl font-bold mb-4">Leave a Comment</h2>


  <form class="flex flex-col w-full gap-4 p-5 rounded-lg ">
  
    <input
      type="text"
      placeholder="Your Name"
      class="p-2 border shadow-md rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

    <textarea
      placeholder="Your Comment"
      rows="4"
      class="p-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    ></textarea>

    
    <button
      type="submit"
      class="bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
    >
      Post Comment
    </button>
  </form>


  <div class="mt-6">
    <h3 class="text-xl font-semibold mb-3">All Comments</h3>

    
    <div class="bg-white p-4 mb-3 rounded-lg shadow-sm border">
      <h4 class="font-semibold">John Doe</h4>
      <p class="text-gray-600">This is an example comment!</p>
    </div>

    <div class="bg-white p-4 mb-3 rounded-lg shadow-sm border">
      <h4 class="font-semibold">Jane Smith</h4>
      <p class="text-gray-600">I really enjoyed reading this blog post 😊</p>
    </div>
  </div>
</div>

  )
}

export default Comment