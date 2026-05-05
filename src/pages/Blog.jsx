import React from 'react'
import { Link } from 'react-router-dom'
import { getPostsByYearDesc, formatShortDate } from '../data/posts'

function Blog() {
  const groups = getPostsByYearDesc()

  return (
    <section className='mt-10 px-4 flex flex-col gap-12 text-primary-gray animate-fade-in-up'>
      <header className='flex flex-col gap-3'>
        <span className='text-sm uppercase tracking-widest text-primary-gray'>Blog</span>
        <h1 className='text-3xl font-bold sm:text-4xl'>Últimos posts</h1>
        <p className='text-base text-primary-gray'>
          Notas, aprendizajes y experimentos que voy publicando entre proyecto y proyecto.
        </p>
      </header>

      <div className='flex flex-col gap-12'>
        {groups.map(([year, items]) => (
          <div key={year} className='grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-16'>
            <div className='pt-1 text-sm font-medium text-primary-gray md:text-base'>
              {year}
            </div>
            <ul className='flex flex-col divide-y divide-gray-200/60'>
              {items.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className='group flex items-start justify-between gap-6 py-4 transition hover:opacity-80'
                  >
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-lg font-semibold text-primary-dark'>{post.title}</h2>
                      <p className='text-sm text-primary-gray'>{post.description}</p>
                    </div>
                    <time className='shrink-0 pt-1 text-sm tabular-nums text-primary-gray'>
                      {formatShortDate(post.isoDate)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
