import { MainChat, Nav } from "@UI/organisms";
import { Form } from "@UI/molecules";

const MainContainer = () => {
  return (
    <main className="p-2 grid items-center justify-center h-screen">
      <div className="w-96 h-[80vh] duration-500 drop-shadow-lg md:w-[500px]">
        <Nav />
        <MainChat />
        <Form />
      </div>
    </main>
  );
};

export default MainContainer;
