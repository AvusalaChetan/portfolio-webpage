import { HoverBehaviour } from "../animations/Cursor";


const HomeRightBox = () => {
  return (
    <div className="">
      <HoverBehaviour scale={2}>
        <ul className="border text-xl  border-gray-400 rounded-4xl list-disc p-4 list-inside mt-6">
          {/* <h3 className="font-bold underline">Education</h3> */}
          <li>I am in <span className="text-[#2563EB] font-bold">B-Tech III year</span></li>
          <li>My branch is <span className="text-[#F97316] font-bold">Electronics and Communication Engineering</span></li>
          <li>I have strong knowledge of <span className="text-[#EAB308] font-bold">Microcontrollers & IoT </span> with good </li>
          <li>I have a good <span className="text-purple-800 font-bold">Communication</span> in english</li>
          <li>I like to  become an <span className="text-[#0a12a6] font-bold ">Embedded System enginner </span> in semiConductor industry <br /> or 
         {' '} <span className="text-gray-700 font-bold">MERN Stack / Frontend </span> Developer
         because i have skills on both 
          </li>
        </ul>
      </HoverBehaviour>
    </div>
  );
};

export default HomeRightBox;
