import React from 'react'

const BlogDetails = (props) => {
  const {
    postDetails: { title, img, content, created_at },
  } = props?.postDetails
  return (
    <div className="container max-auto py-6 mx-auto">
      <div className="  ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
          <div className="max-w-full rounded overflow-hidden shadow-lg">
            <img src={img} alt="image" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{content}</p>
              <p className="text-gray-700 text-base">{created_at}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
