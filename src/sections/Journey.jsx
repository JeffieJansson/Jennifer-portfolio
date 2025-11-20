// src/sections/Journey.jsx
import posts from "../data/posts.json";

export const Journey = () => {
  return (
    <section id="my-words">
      <h2>My words</h2>

      {posts.map((post) => (          //loop through posts data and render each post
        <article key={post.id}>      {/*helps React keep track of list items*/}
          {post.image && (           //Only render image if it exists
            <img src={post.image.src} alt={post.image.alt} />
          )}

          <p>{post.badge}</p>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
          >
            Read article
          </a>
        </article>
      ))}
    </section>
  );
};
