import styled from "@emotion/styled";
import { IscrollType } from ".";
interface IProps {
  isScroll: IscrollType
}

export const ScrollViewDiv = styled.div<IProps>`
  flex: 1;
  background-color: red;
  overflow: hidden;
  
  .first {
    height: 100%;
    background-color: wheat;
  }

  .scrolled {
    height: 100%;
    background-color: #bfc;
    transform: translateY(0%);
    ${(props: IProps) => props.isScroll == "down"
      ? "transform: translateY(-100%);" 
      : "transform: translateY(100%);"
    }
    transition: transform 0.5s ease;
    overflow-y: scroll;
  }

`
