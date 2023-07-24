import React from 'react'
import { Link } from 'react-router-dom'
const BlogList = (props) => {
  return (
    <div className="container max-auto py-6 mx-auto">
      <div className="  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {props.list.map((listItem, index) => {
            console.log(listItem)
            return (
              <Link
                key={index.toString()}
                to={'/detailsPage/' + listItem?.id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img src={listItem.img} alt="" className="w-full" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {listItem?.title}
                  </div>
                  <p className="text-gray-700 text-base">{listItem?.short}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {listItem?.created_at}
                  </p>
                </div>

                {/* <Link
                  key={index.toString()}
                  to={'/detailsPage/' + listItem.id}
                  className="block text-center bg-blue-500 text-black py-2"
                >
                  আরো পড়ুন <span className="text-white">...</span>
                </Link> */}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogList
