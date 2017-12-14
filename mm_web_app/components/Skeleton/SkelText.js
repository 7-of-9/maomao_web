import styled, { keyframes } from 'styled-components'
const shine = keyframes`
  to { background-position: 200% 0, 0 0; }
`
export default styled.span`
  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(211, 211, 211, 0)), color-stop(50%, rgba(211, 211, 211, 0.8)), to(rgba(211, 211, 211, 0))),
    linear-gradient( #eee 20px, transparent 0 );
  background-size: 100px 200px,
    210px 200px;
  background-repeat: repeat-y;
  background-position: -100px 0,
    0 0;
  width: 210px;
  height: ${props => props.height || 10}px;
  margin: ${props => props.padding || 'auto'};
  display: inline-block;
  animation: ${shine} 1s infinite;
`
