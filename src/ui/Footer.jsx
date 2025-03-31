import { Link } from "react-router";
import handleScroolToTop from "../utils/Scroll";
import { useEffect, useState } from "react";
import Subsribe from "../services/emailSubcribers";

function Footer() {
    const [value,setValue] = useState("");
    const [status,setStatus] = useState("");
    const [submit,setSubmit] = useState(false)

    useEffect(()=>{
        async function submitF() {
            if(submit===true){
                let result = await Subsribe(value);
                setStatus(result);
                setSubmit(false)
            }
        }
        submitF();
    },[submit,value]);

    function handleSubmit(e){
        e.preventDefault();
         if(status=="valid"){
            setSubmit(true);
         }
    }

    function handleChange(e){
        setValue(e.target.value);

        if(e.target.value.length==0){
            setStatus("empty");
            return;
        } 
        let valid =  emailValidation(e.target.value)

        if(!valid){
            setStatus("invalid");
            return;
        }

        setStatus("valid")
    }
  return (
    <footer className="bg-gray-100 px-8 md:px-14 mt-16 font-gelasio text-black/90">
      <div className="w-full h-10 md:h-20">
        <button
          className="w-14 h-14 md:w-24 md:h-24 uppercase bg-black font-urbanist text-white float-right font-bold"
          onClick={handleScroolToTop}
        >
          Go
          <br /> up
        </button>
      </div>
      <div className="flex py-6 gap-10 flex-wrap">
        <ul className="text-lg md:text-2xl *:py-1.5 text-black/85 ">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/journal">Journal</Link>
          </li>
          <li>
            <Link to="/corporate">Corparate Orders</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/order">Order Status</Link>
          </li>
        </ul>
        <div className="w-min">
          <h4 className="md:text-2xl text-xl pb-1.5 ">Newsletter Signup</h4>
          <p className="md:text-sm text-xs italic text-black/60 md:w-[130%]">
            Sign up to our Newsletter to hear about new product releases, learn
            about our design process, and everything else going on behind the
            scenes at Grovemade.
          </p>
          <form className="border-b-black  border-b-[1px]  flex justify-start mt-14">
            <input
              type="email"
              placeholder="Enter Your Email "
              className="bg-gray-100 italic text-sm px-4 py-2 placeholder:text-black/60 w-44 md:w-56 focus:outline-none"
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Submit"
              className="uppercase font-urbanist font-[800] text-black/70 text-sm"
              onClick={handleSubmit}
            />
           </form>
            {status=="empty" && <span className="text-black/60 text-sm italic mt-3">Please complete this required field.</span>}
            {status=="invalid" && <span className="text-black/60 text-sm italic mt-3">Email must be formatted correctly.</span>}
            {status=="success" && <span className="text-black/60 text-sm italic mt-3">Success</span>}
            {status=="error" && <span className="text-black/60 text-sm italic mt-3">Something went wrong</span>}
        </div>
      </div>
      <div className=" flex py-6 justify-between flex-wrap">
        <div className="flex gap-4 ">
          <a href="http://https://www.facebook.com/ivan.hudko.7">
            <img src="/facebook.png" alt="facebook" width={24} />
          </a>
          <a href="http://https://www.instagram.com/_boba_fett_135/">
            <img src="/instagram.png" alt="facebook" width={24} />
          </a>
          <a href="http://https://www.linkedin.com/in/%D1%96%D0%B2%D0%B0%D0%BD-%D0%B3%D1%83%D0%B4%D1%8C%D0%BA%D0%BE-b8b1b91a8/">
            <img src="/linkedin.png" alt="facebook" width={24} />
          </a>
        </div>
        <ul className="flex gap-4 text-xs md:text-sm italic text-black/60  flex-wrap ">
          <li>
            <Link to="/">©2024 Grovemade</Link>{" "}
          </li>
          <li>
            <Link to="/support/cookie">Cookies Preferences </Link>
          </li>
          <li>
            <Link to="/support/terms&conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/statement">Accessibility Statement</Link>
          </li>
          <li>
            <Link to="/policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="https://department.nyc/">Site by Department</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function emailValidation(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  emailRegex.test(email);
}
export default Footer;
