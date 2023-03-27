import { useAppContext } from "@/context";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const FormSubmit = () => {
  const { question } = useAppContext();
  return (
    <>
      {question === "" ? (
        <span className="select-none" />
      ) : (
        <button className="text-quinary pt-2 font-bold text-xl border-none select-none cursor-pointer col-span-1">
          <IoChevronForwardCircleSharp />
        </button>
      )}
    </>
  );
};

export default FormSubmit;
