import styled from "styled-components";

const VerticalDivider = ({ className }) => {
  return (
    <StyledVerticalDivider>
      <svg className={className} width="1" height="110" viewBox="0 0 1 110" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="2.18557e-08" x2="0.499995" y2="110" stroke="#585858" strokeDasharray="5 5" />
      </svg>
    </StyledVerticalDivider>
  )
}

const StyledVerticalDivider = styled.div`
  text-align: center;
  width: 100;
`;

export { VerticalDivider }
