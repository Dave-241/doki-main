import { useState } from "react";
import { XLg } from "react-bootstrap-icons";
import Link from 'next/link';



const Nav = () => {

    const [width, setwidth] = useState("0")

    const navshow = () => {
        setwidth("100%")
    }

    const navhide = () => {
        setwidth("0%")
    }

    return (
        <nav className="nav">
            {/* logo */}
            <Link href="/" className="logo_wrapper">
                <div className="logo_text_wrap1">
                    <span className="logo_text1">DO</span>
                </div>
                <div className="logo_text_wrap2">
                    <span className="logo_text2">KI</span>
                </div>
            </Link>

            {/* navigation menu */}
            <div className="nav_menu">

                <div className="menu">
                    <Link href="#" className="menu_styles" style={{ color: "#6B006B" }}>Home</Link>
                    <Link href="#" className="menu_styles" >FAQ</Link>
                    <Link href="#" className="menu_styles" >Blog</Link>
                </div>
                {/* desktop ctn */}
                <div className="ctn_wrapper">
                    <Link href="/" className="ctn">Join The Waitlist</Link>
                </div>
            </div>
            {/* mobile ctn */}
            <div className="mob_sec_wrap">
                <Link href="/" className="mob_ctn">JOIN THE WAITLIST</Link>

                <div className="mob_ham_wrap" onClick={navshow}>
                    <div className="ham"></div>
                    <div className="ham" ></div>
                    <div className="ham"></div>
                </div>
            </div>


            {/* mobile navgiation menu */}
            <div className="mob_wrap" style={{ width: width }}>
                <div className="mob_exit_wrap" >
                    <div className="mob_exit" onClick={navhide}>
                        <XLg className="exit" />
                    </div>
                </div>

                <div className="mob_menu_wrap" >
                    <a href="" className="mob_list">Home</a>
                    <a href="" className="mob_list">FAQ</a>
                    <a href="" className="mob_list">Blog</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;