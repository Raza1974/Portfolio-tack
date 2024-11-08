
// src/app/blog/first-post/page.js

'use client';

export default function FirstPost() {
  return (
    <div className="post-container">
      <h1>How to Build Your First Full-Stack Application</h1>
      <p>This post will guide you through the process of building your first full-stack web application using Next.js, TypeScript, and Tailwind CSS.</p>

      <section>
        <h2>Step 1: Setting Up the Project</h2>
        <p>First, we will set up the project structure and install the necessary dependencies...</p>
      </section>

      <section>
        <h2>Step 2: Creating the Frontend</h2>
        <p>In this step, we will build the frontend of our application using React components...</p>
      </section>

      <section>
        <h2>Step 3: Setting Up the Backend</h2>
        <p>Now we will set up the backend using a Node.js server and connect it to our frontend...</p>
      </section>

      <style jsx>{`
        .post-container {
          padding: 20px;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
        }

        section h2 {
          font-size: 1.8rem;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
