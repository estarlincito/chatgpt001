import { useAppContext } from "@/context";
import { AiOutlineCheckCircle } from "react-icons/ai";

const NavCollapseAlert = () => {
  const { alert } = useAppContext();

  return (
    <>
      {alert === true ? (
        <div className="text-center p-5 rounded-lg">
          <p className="duration-500 text-lg">Historial eliminado</p>
          <i className="flex justify-center text-3xl">
            <AiOutlineCheckCircle />
          </i>
        </div>
      ) : null}
    </>
  );
};

export default NavCollapseAlert;
