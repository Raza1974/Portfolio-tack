'use client';  // Explicitly mark this as a client-side component

import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Welcome to My Professional Blog</h1>
        <p>Your go-to source for tech insights, career advice, and more.</p>
      </header>

      {/* Blog Posts */}
      <section className="posts">
        <article className="post">
          <h2 className="post-title">
            <Link href="./blog/firt-post">How to Build Your First Full-Stack Application</Link>
          </h2>
          <p className="post-excerpt">
            In this post, I will walk you through the steps of building your first full-stack web application using Next.js, TypeScript, and Tailwind CSS.
          </p>
          <Link href="./blog/first-post" className="read-more">
            Read More
          </Link>
        </article>

        <article className="post">
          <h2 className="post-title">
            <Link href="./blog/second-post">Best Practices for Effective Team Collaboration</Link>
          </h2>
          <p className="post-excerpt">
            Discover the best practices for fostering effective collaboration within software development teams and ensuring successful project outcomes.
          </p>
          <Link href="./blog/second-post" className="read-more">
            Read More
          </Link>
        </article>

        <article className="post">
          <h2 className="post-title">
            <Link href="./blog/third-post">Mastering the Art of Debugging</Link>
          </h2>
          <p className="post-excerpt">
            Learn valuable debugging techniques that will help you identify and resolve issues quickly and efficiently in your code.
          </p>
          <Link href="./blog/third-post" className="read-more">
            Read More
          </Link>
        </article>
      </section>

      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Recent Posts</h3>
        <ul>
          <li>
            <Link href="/blog/first-post">How to Build Your First Full-Stack Application</Link>
          </li>
          <li>
            <Link href="/blog/second-post">Best Practices for Effective Team Collaboration</Link>
          </li>
          <li>
            <Link href="/blog/third-post">Mastering the Art of Debugging</Link>
          </li>
        </ul>

        <h3>Contact</h3>
        <p>If you did like to get in touch, feel free to <Link href="/contact">contact me</Link>.</p>

      </aside>

      {/* Styles */}
      <style jsx>{`
        .blog-container {
          display: flex;
          justify-content: space-between;
          padding: 20px;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .blog-header h1 {
          font-size: 2.5rem;
          color: #333;
        }

        .blog-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .posts {
          width: 70%;
        }

        .post {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .post-title {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .post-title a {
          text-decoration: none;
          color: #2980b9;
        }

        .post-title a:hover {
          text-decoration: underline;
        }

        .post-excerpt {
          font-size: 1.1rem;
          color: #555;
        }

        .read-more {
          display: inline-block;
          margin-top: 10px;
          color: #2980b9;
          text-decoration: none;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .sidebar {
          width: 25%;
          padding: 20px;
          background-color: #f8f8f8;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .sidebar h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
        }

        .sidebar li {
          margin-bottom: 10px;
        }

        .sidebar li a {
          text-decoration: none;
          color: #2980b9;
        }

        .sidebar li a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .blog-container {
            flex-direction: column;
            align-items: center;
          }

          .posts {
            width: 100%;
            margin-bottom: 40px;
          }

          .sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
