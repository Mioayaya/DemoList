import styled from "@emotion/styled";
interface Iprops {
  pos: {
    left: number,
    top: number
  }
}

export const DemoDiv = styled.div<Iprops>`
  .black-stone {
    height: 50px;
    width: 50px;
    background-color: black;
    position: relative;
    top: ${props => props.pos.top }px;
    left: ${props => props.pos.left}px;
    display: inline-block;
  }
`
