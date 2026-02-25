import { useNavigate } from "react-router";
import logo from "../assets/GloboLogo.png";
import  {logo as logoCss } from "./Banner.module.css";

const subtextStyle={
   fontStyle:"italic",
   fontSize:"x-Large",
   color:"coral"
}

const Banner = ({children}) => {
  const navigate = useNavigate();
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img onClick={()=> navigate('/')} src={logo} alt="Logo" className={logoCss}/>
      </div>
      <div className="col-7 mt-5" style={subtextStyle}>{children}</div>
    </header>
  );
};

export default Banner;