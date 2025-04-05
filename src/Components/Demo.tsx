import { FC, memo, useRef, useState } from "react";
import { DemoDiv } from "./DemoStyled";
import { useCallbackRef } from "../Hooks/useCallbackRef";

interface IPos {
  left: number;
  top: number;
}

interface IDragData {
  startTop: number; // block的Top值
  startLeft: number; // ...
  startX: number; // 鼠标的left值
  startY: number; // ...
}

const Demo: FC = memo(() => {
  const [pos, setPos] = useState<IPos>({
    left: 15,
    top: 15,
  });

  const moveDraggier = (() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dragData = useRef<IDragData>({
      startTop: 0,
      startLeft: 0,
      startX: 0,
      startY: 0,
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mousedown = useCallbackRef((e: React.MouseEvent<HTMLDivElement>) => {
      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
      dragData.current = {
        startTop: pos.top,
        startLeft: pos.left,
        startX: e.clientX,
        startY: e.clientY,
      };
    });

    const mousemove = (e: MouseEvent) => {
      const { startTop, startLeft } = dragData.current;
      const deltaX = e.clientX - dragData.current.startX;
      const deltaY = e.clientY - dragData.current.startY;
      setPos({
        top: startTop + deltaY,
        left: startLeft + deltaX,
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mouseup = (_e: MouseEvent) => {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    };
    return {
      mousedown,
    };
  })();

  return (
    <DemoDiv pos={pos}>
      <div className="black-stone" onMouseDown={moveDraggier.mousedown} />
    </DemoDiv>
  );
});

export default Demo;
