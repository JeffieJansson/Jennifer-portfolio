// src/sections/Journey.jsx
import styled from "styled-components";
import posts from "../data/posts.json";
import Button from "../components/Button";
import { Tag } from "../components/Card";
import { LiveIcon } from "../components/Icons";

// Section wrapper (white background, big vertical padding)
const JourneySection = styled.section`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0;
  gap: 128px;
`;

// Section title
const JourneyTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

// Container for all posts
const PostsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
`;

// Single post row
const PostRow = styled.article`
  display: flex;
  align-items: center;
  gap: 125px;
  align-self: stretch;
`;

// Thumbnail image
const Thumb = styled.img`
  width: 479px;
  height: 300px;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
  
`;

// Content (right side)
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Title + excerpt
const PostTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

const PostExcerpt = styled.p`
 color: #202020;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 177.778% */
`;

// Button row
const ButtonRow = styled.div`
  margin-top: 8px;
`;

export const Journey = () => {
  return (
    <JourneySection id="my-words">
      <JourneyTitle>My Words</JourneyTitle>

      <PostsList>
        {posts.map((post) => (
          <PostRow key={post.id}>
            {post.image && (
              <Thumb src={post.image.src} alt={post.image.alt} />
            )}

            <PostContent>
              {post.badge && <Tag>{post.badge}</Tag>}

              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>

              {post.link && (
                <ButtonRow>
                  <Button
                    as="a"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiveIcon aria-hidden="true" />
                    <span>Read article</span>
                  </Button>
                </ButtonRow>
              )}
            </PostContent>
          </PostRow>
        ))}
      </PostsList>

      
    </JourneySection>
  );
}


