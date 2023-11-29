import img1 from "../Images/eventImages/LFR.png";
import img2 from "../Images/eventImages/ROBOSOCCER.png";
import img3 from "../Images/eventImages/OffRoading.png";
import img4 from "../Images/eventImages/RoboSumo.png";
import img5 from "../Images/eventImages/Coding.png";
import img6 from "../Images/eventImages/BRIDGE.jpg";
import offroading from "../ruleBooks/offroadingRule.pdf";
import bridge from "../ruleBooks/bridgeRule.pdf";
import coding from "../ruleBooks/codingRule.pdf";
import lfr from "../ruleBooks/lfrRule.pdf";
import robosoccer from "../ruleBooks/robosoccerRule.pdf";
import robosumo from "../ruleBooks/robosumoRule.pdf";

export const Eventdata = [
  {
    id: "1",
    name: "Line Following Robot",
    desc: " \"Precision in Motion: Conquer the Maze with LFR at Spandan's Tech Fest! \"Experience the pulse-pounding challenge of Spandan's lTechnology Festival with our electrifying Line Following Robot (LFR) competition! Get ready to unleash your innovation and witness the future of technology at Spandan! Are you up for the exhilarating LFR challenge?",
    image: img1,
    tags: ["Robotics"],
    link: lfr,
    branchEntry: "249/-",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Ashmit Rana",
    CordinateNumber: "+91-8791889622",
    category: "Inter-Branch",
  },
  {
    id: "2",
    name: "Robo Sumo",
    desc: "Get ready to witness sparks fly at Spandan's Techfest as the battleground roars to life with the electrifying Robo Sumo competition. Only one machine will emerge victorious, claiming the title of the ultimate Robo Sumo champion amidst the cheers and applause echoing through the halls of the college.",
    image: img4,
    tags: ["Robotics"],
    link: robosumo,
    branchEntry: "499/-",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Harsh Singh",
    CordinateNumber: "+91-9149181145",
    category: "Inter-Branch",
  },
  {
    id: "3",
    name: "Robo Soccer",
    desc: "Spandan is gearing up for an electrifying showdown as it hosts the highly anticipated Robo Soccer competition. Expect a spectacle where innovation meets competition,promising a thrilling display of robotic ingenuity and sportsmanship in the heart of Spandan's tech extravaganza.",
    image: img2,
    tags: ["Robotics"],
    link: robosoccer,
    branchEntry: "499/-",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Anubhav Dimri",
    CordinateNumber: "+91-7817832297",
    category: "Inter-Branch",
  },
  {
    id: "4",
    name: "Off Roading",
    desc: "Get ready to rev up your engines and conquer the rugged terrain at Spandan's thrilling Off-Roading Competition! The adrenaline-fueled event promises a thrilling showcase of power and skill as participants navigate their vehicles through challenging landscapes, testing their driving prowess and off-road expertise.",
    image: img3,
    tags: ["Robotics"],
    link: offroading,
    branchEntry: "499/-",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Shivam Saklani",
    CordinateNumber: "+91-7060571056",
    category: "Inter-Branch",
  },

  {
    id: "5",
    name: "Coding Competition",
    desc: "Unleash your coding prowess at Spandan's  coding competition! From algorithmic marvels to elegant code solutions, participants will navigate through stimulating challenges that test their problem-solving abilities.Get ready to code your way to glory at Spandan's coding competition!",
    image: img5,
    tags: ["Coding"],
    link: coding,
    branchEntry: "99/Head",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Nutan Senwal",
    CordinateNumber: "+91-8272890623",
    category: "Multiple-Teams/Branch",
  },
  {
    id: "6",
    name: "Bridge It",
    desc: "Dive into the heart of engineering excitement with BridgeIt at Spandan Technology Festival! Gather your team and embark on an engaging journey to craft a sustainable bridge using limited materials.At Spandan, we're building more than just bridges – we're constructing unforgettable experiences! Spandan's BridgeIt: Building the Future, One Sustainable Span at a Time!",
    image: img6,
    tags: ["Robotics"],
    link: bridge,
    branchEntry: "149/-",
    branchFirst: "xxK",
    branchSecond: "xxK",
    CordinateName: "Akshit Chauhan",
    CordinateNumber: "+91-6395035113",
    category: "Inter-Branch",
  },
];
