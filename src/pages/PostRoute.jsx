import React from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post'
import NotFound from './NotFound'
import { getPostBySlug } from '../data/posts'

function PostRoute() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <NotFound />

  return <Post post={post} />
}

export default PostRoute
