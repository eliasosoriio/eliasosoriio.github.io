import React from 'react'
import { Link } from 'react-router-dom'
import { posts as allPosts } from '../data/posts'

function renderBlock(block, idx) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={idx} className='mt-6 text-2xl font-bold text-primary-dark'>
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote
          key={idx}
          className='border-l-2 border-primary-dark pl-6 italic text-primary-dark'
        >
          {block.text}
        </blockquote>
      )
    case 'p':
    default:
      return <p key={idx}>{block.text}</p>
  }
}

function Post({ post = allPosts[0] }) {
  return (
    <article className='mt-10 px-4 flex flex-col text-primary-gray animate-fade-in-up'>
      <figure className='mb-10'>
        <img
          src={post.cover}
          alt={post.coverAlt}
          className='w-full rounded-default object-cover aspect-[16/10]'
        />
      </figure>

      <header className='mb-10 flex flex-col gap-3'>
        <h1 className='text-3xl font-bold leading-tight text-primary-dark sm:text-4xl'>{post.title}</h1>
        <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-primary-gray'>
          <time>{post.date}</time>
          <span aria-hidden='true'>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className='flex flex-col gap-6 text-lg leading-relaxed'>
        {post.body.map(renderBlock)}
      </div>

      <footer className='mt-16 border-t border-primary-light-gray pt-6 text-sm'>
        <Link
          to='/'
          className='inline-flex items-center gap-2 text-primary-gray transition hover:text-primary-dark'
        >
          <span aria-hidden='true'>←</span> Volver al inicio
        </Link>
      </footer>
    </article>
  )
}

export default Post
