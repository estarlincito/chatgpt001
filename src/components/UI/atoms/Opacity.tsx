"use client";
import { useToggle } from "@/Hooks";

const Opacity = () => {
  const { collapse, offCollapse } = useToggle();
  return (
    <>
      {collapse ? (
        <div
          onClick={offCollapse}
          className="fixed left-0 right-0 z-30 top-16 bg-primary h-4/5 opacity-60"
        ></div>
      ) : null}
    </>
  );
};

export default Opacity;
