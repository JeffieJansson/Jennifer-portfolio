// src/sections/Journey.jsx
import styled from "styled-components";
import posts from "../data/posts.json";
import { media } from "../data/media.js";
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
  font-family: Poppins;

@media ${media.tablet} {
    padding: 96px 16px;
    gap: 96px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
    gap: 64px;
  }
`;

// Section title
const JourneyTitle = styled.h2`
  font-size: 80px;
  font-weight: 500;
  text-align: center;

  @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
  }
`;

// Container for all posts
const PostsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;

  @media ${media.tablet} {
    gap: 40px;
  }

  @media ${media.mobile} {
    gap: 32px;
  }
`;

// Single post row
const PostRow = styled.article`
  display: flex;
  align-items: center;
  gap: 125px;
  align-self: stretch;

  
  @media ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  @media ${media.mobile} {
    align-items: center;
  }
`;

// Thumbnail image
const Thumb = styled.img`
  width: 479px;
  height: 300px;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
  
 @media ${media.tablet} {
    width: 100%;
    height: auto;
  }
`;

// Content (right side)
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

    @media ${media.tablet} {
    max-width: 100%;
  }
`;

// Title + excerpt
const PostTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  
  @media ${media.mobile} {
    font-size: 24px;
  }
`;

const PostExcerpt = styled.p`
 color: #202020;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 177.778% */

  @media ${media.mobile} {
    font-size: 16px;
    line-height: 28px;
  }
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


