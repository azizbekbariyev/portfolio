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
            height: "100vh",
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

        <Content className="content">Content</Content>
      </Layout>
    </Layout>
  );
};

export default Home;
