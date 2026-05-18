import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

const DividerLine = styled.div`
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
`;

export const Divider = () => {
  return (
    <DividerWrapper>
      <DividerLine />
    </DividerWrapper>
  );
};
