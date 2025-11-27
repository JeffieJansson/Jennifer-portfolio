// src/sections/Journey.jsx
import { useState } from "react"; 
import styled from "styled-components";
import posts from "../data/posts.json";
import { media } from "../data/media.js";
import Button from "../components/Button";
import { Tag } from "../components/Card";
import { LiveIcon } from "../components/Icons";
import { SeeMoreButton } from "../components/SeeMoreButton";

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
    gap: 80px;
  }
`;

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

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  max-width: 1184px;

  @media ${media.tablet} {
    gap: 48px;
  }

  @media ${media.mobile} {
    gap: 40px;
  }
`;

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

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;

  @media ${media.tablet} {
    max-width: 100%;
  }
`;

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
  font-weight: 400;
  line-height: 32px;

  @media ${media.mobile} {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ButtonRow = styled.div`
  margin-top: 8px;
`;

  export const Journey = () => {
  // visa bara 3 artiklar först
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? posts : posts.slice(0, 3);
  const hasMorePosts = posts.length > 3;

  return (
    <JourneySection id="my-words">
      <JourneyTitle>My Words</JourneyTitle>

      <PostsList>
        {visiblePosts.map((post) => (
          <PostRow key={post.id}>
            {post.image && <Thumb src={post.image.src} alt={post.image.alt} />}

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

      {hasMorePosts && (
        <SeeMoreButton
          onClick={() => setShowAll((prev) => !prev)}
          label={showAll ? "Show fewer articles" : "See more articles"}
        />
      )}
    </JourneySection>
  );
};