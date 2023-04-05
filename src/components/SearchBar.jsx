import React from 'react'

function SearchBar() {
  return (
    <div className='w-1/2 mb-8'>
      <form>
        <div className="">
          <div className="flex space-x-4">
            <div className="flex rounded- overflow-hidden w-full">
              <input type="text" className="w-full outline-none px-4" />
              <button className="bg-yellow-500 text-slate-900 px-6 text-lg font-semibold py-4 border-transparent focus:border-transparent focus:ring-0">Go</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar