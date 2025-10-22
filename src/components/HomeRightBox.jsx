import { HoverBehaviour } from "../animations/Cursor";


const HomeRightBox = () => {
  return (
    <div className="border-gray-400 rounded-2xl overflow-hidden lg:w-fit md:w-[40rem] md:px-2 md:py-4 md:mr-11 border lg:mt-4 ">
      <HoverBehaviour scale={2}>
        <ul className=" text-xl  list-disc lg:p-4 sm:px-2 list-inside ">
          {/* <h3 className="font-bold underline">Education</h3> */}
          <li>I am in <span className="text-[#2563EB] font-bold">B-Tech III year</span></li>
          <li>My branch is <span className="text-[#F97316] font-bold">Electronics and Communication Engineering</span></li>
          <li>I have strong knowledge of <span className="text-[#EAB308] font-bold">Microcontrollers & IoT </span> </li>
          <li className="md:hidden sm:hidden lg:block">I have a good <span className="text-purple-800 font-bold">Communication</span> in english</li>
          <li>I like to  become an <span className="text-[#0a12a6] font-bold ">Embedded System enginner </span> in semiConductor industry <br /> or
            <span className="text-gray-700 font-bold">MERN Stack / Frontend </span> Developer
            because i have skills on both
          </li>
        </ul>
      </HoverBehaviour>
    </div>
  );
};

export default HomeRightBox;
