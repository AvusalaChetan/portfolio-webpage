import HomeRightBox from "../components/HomeRightBox";

const HomePage = () => {
  return (
   <>
    <div
      id="home"
      className="h-screen w-full mx-auto z-40 flex  justify-center items-center"
      >
     <div className=" h-[75%] w-[80%] py-8 px-5 mx-auto flex flex-col justify-center items-center gap-3">
       <div className="">
        <span className="text-2xl font-blod">Hello, my name is </span>
        <h1
          id="name"
          className="text-[110px] font-extrabold tracking-wide uppercase "
        >
          avusala chetan
        </h1>
      </div>
      <div className="ml-[25rem]">
       <HomeRightBox/>
      </div>
     </div>
    </div>
   </>

  );
};


export default HomePage;
