import { FC, memo, useEffect, useRef, useState } from "react";
import { ScrollViewDiv } from "./styled";

export type IscrollType = "up" | "down" | "none";

const fillArr = new Array<number>(50);

const ScrollView: FC = memo(() => {
  const [isScroll, setIsScroll] = useState<IscrollType>("none");
  const [active, setActive] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  fillArr.fill(111);

  // 监听全局滚轮事件
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setIsScroll("down");
      } else if (e.deltaY < 0 && !active) {
        setIsScroll("up");
      }
    };
    // 在 window 上添加事件监听
    window.addEventListener("wheel", handleWheel);
    // 组件卸载时移除监听
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScroll,active]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      setActive(true);

      // 判断是否滚动到顶部      
      if(container.scrollTop <= 0) setActive(false);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollViewDiv isScroll={isScroll}>
      <div className="first">初始页面</div>
      <div className="scrolled" ref={scrollRef}>
        滚动后页面
        {fillArr.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </ScrollViewDiv>
  );
});

export default ScrollView;
