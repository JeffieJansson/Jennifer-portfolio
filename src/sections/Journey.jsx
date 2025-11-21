// src/sections/Journey.jsx
import posts from "../data/posts.json";
import Button from "../components/Button";
import { Tag } from "../components/Card";
import { LiveIcon } from "../components/Icons";

export const Journey = () => {
  return (
    <section id="my-words">
      <h2>My words</h2>

      {posts.map((post) => ( // map over posts array
        <article key={post.id}>   {/* unique key for each post*/}
          {/* Thumb-img */}
          {post.image && ( // render image if it exists in JSON
            <img
              src={post.image.src}
              alt={post.image.alt}
            />
          )}

          {/* Datum-badge som tagg */}
          {post.badge && <Tag>{post.badge}</Tag>} {/* render badge if it exists in JSON*/}

          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

          {/* Read article-button same style as LiveIcon button */}
          {post.link && (               // render button if link exists in JSON
            <Button
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiveIcon aria-hidden="true" />
              <span>Read article</span>
            </Button>
          )}
        </article>
      ))}
    </section>
  );
};
