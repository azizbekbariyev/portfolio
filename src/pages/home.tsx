import { Layout } from "antd";
import img from "../assets/aziz.jpg";
import "./home.css";
const { Header, Sider, Content } = Layout;
import {
  File,
  House,
  Wrench,
  Briefcase,
  SquarePen,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { Footer } from "antd/es/layout/layout";

const Home = () => {
  return (
    <Layout>
      <Header className="all flex justify-center">
        <div className="btn-container mt-10 mb-auto flex gap-2 px-3 py-2 bg-black rounded-full shadow-sm">
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <House size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <File size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <Wrench size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <Briefcase size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <SquarePen size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-purple-600 hover:text-white transition-all duration-200">
            <Mail size={20} />
          </button>
        </div>
      </Header>
      <Layout className="flex">
        <Sider
          width="40%"
          style={{
            backgroundColor: "rgb(16, 17, 18)",
            padding: "30px 20px",
          }}
        >
          <div className="card ml-auto flex flex-col items-center gap-10 text-white">
            <img
              src={img}
              alt=""
              className="w-60 h-60 rounded-full object-cover"
            />

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Azizbek Bariyev</h1>
                <h2 className="text-2xl text-gray-400">Full Stack Developer</h2>
                <p className="text-1xl text-gray-500">Uzbekistan, Tashkent</p>
              </div>

              <div className="flex gap-5">
                <button className="hover:text-purple-500 transition-all duration-200">
                  <Instagram size={30} />
                </button>
                <button className="hover:text-purple-500 transition-all duration-200">
                  <Linkedin size={30} />
                </button>
                <button className="hover:text-purple-500 transition-all duration-200">
                  <Github size={30} />
                </button>
              </div>
            </div>
            <button className="btn px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200">
              <span className="text">Let's Talk</span>
            </button>
          </div>
        </Sider>
        <Content style={{ width: "40%" }} className="content">
          <div>
            <h1 className="text-7xl text-white">
              <b>
                Transforming Your Ideas into{" "}
                <span style={{ color: "rgb(145, 75, 241)" }}>Reality</span>
              </b>
            </h1>
            <p className="text-white text-2xl mt-5">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>
            <div className="flex text-white gap-16 font-bold mt-10 ">
              <div className="exprince flex flex-col">
                <h5>+12</h5>
                <h6>YEARS OF EXPERIENCE</h6>
              </div>
              <div className=" exprince flex flex-col">
                <h5>+46</h5>
                <h6>PROJECTS COMPLETED</h6>
              </div>
              <div className="exprince flex flex-col">
                <h5>+20</h5>
                <h6>WORLDWIDE CLIENTS</h6>
              </div>
            </div>
            <div className="flex gap-5 mt-10 items-center">
              <button className="btn px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200">
                <span className="text">Let's Talk</span>
              </button>
              <div>
                <button className="cta flex flex-row items-center">
                  <span className="hover-underline-animation"> Shop now </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Content>
        <Footer className="foot flex w-1/5 justify-center">
          <div className="button-cv">
            <a href="#" className="anchor">
              <span>Download CV</span>
            </a>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
