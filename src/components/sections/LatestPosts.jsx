import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../../data/posts'

const latest = [...posts]
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
  .slice(0, 3)

function LatestPosts() {
  return (
    <section id='posts'>
      <header className='mb-6 flex items-end justify-between gap-4'>
        <h2 className='text-2xl font-bold'>Últimos posts</h2>
        <Link
          to='/blog'
          className='group inline-flex items-center gap-1 text-sm font-medium text-primary-dark transition hover:opacity-70'
        >
          Ver más{' '}
          <span aria-hidden='true' className='transition-transform group-hover:translate-x-1'>→</span>
        </Link>
      </header>
      <ul className='flex flex-col divide-y divide-gray-200/60'>
        {latest.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className='group flex items-start justify-between gap-6 py-5 transition hover:opacity-80'
            >
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-semibold text-primary-dark'>{post.title}</h3>
                <p className='text-sm text-primary-gray'>{post.description}</p>
              </div>
              <span
                aria-hidden='true'
                className='mt-1 text-primary-gray transition-transform group-hover:translate-x-1'
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LatestPosts
