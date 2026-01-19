import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0;
`;

const DividerLine = styled.div`
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #d4a5a5, transparent);
`;

export const Divider = () => {
  return (
    <DividerWrapper>
      <DividerLine />
    </DividerWrapper>
  );
};
