import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { postDetails } from '../APIRequest/APIRequest'
import Loader from '../Components/Loader'
import BlogDetails from '../Components/BlogDetails'

const DetailsPage = () => {
  const [singleItem, setSingleItem] = useState(null)
  console.log(singleItem)
  const { postId } = useParams()

  useEffect(() => {
    ;(async () => {
      let singleItem = await postDetails(postId)
      setSingleItem(singleItem)
    })()
  }, [postId])
  return (
    <Layout>
      {singleItem === null ? (
        <Loader />
      ) : (
        <BlogDetails postDetails={singleItem} />
      )}
    </Layout>
  )
}

export default DetailsPage
