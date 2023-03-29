"use client";
import { useToggle } from "@/Hooks";

const Opacity = () => {
  const { collapse, offCollapse } = useToggle();
  return (
    <>
      {collapse ? (
        <div
          onClick={offCollapse}
          className="fixed w-96 md:w-[500px] h-[63%]  my-auto bg-primary opacity-60 z-30"
        ></div>
      ) : null}
    </>
  );
};

export default Opacity;
