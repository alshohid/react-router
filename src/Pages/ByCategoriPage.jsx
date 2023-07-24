import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { byCategoryPost } from '../APIRequest/APIRequest'
import Loader from '../Components/Loader'
import BlogList from '../Components/BlogList'

const ByCategoriPage = () => {
  const [list, setList] = useState(null)
  let { categoryId } = useParams()
  useEffect(() => {
    ;(async () => {
      let categoryById = await byCategoryPost(categoryId)
      setList(categoryById)
    })()
  }, [categoryId])
  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  )
}

export default ByCategoriPage
