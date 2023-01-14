import Nav from "../components/nav";
import Image from "next/image"
import Heroimg from "../public/H_image.png"
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { useState } from "react";

const Tnn = () => {
    const [ref_modal, setRef_modal] = useState(false)

    const hide_ref_modal = () => {
        setRef_modal(false)
    }

    const show_ref_modal = () => {
        setRef_modal(true)
    }


    return (
        <>

            <div className="wrapper second_all_wrapper">
                <Nav />

                {/* thank you for joinging our waitlist page design */}



                <div className="tnx_all_wrap">


                    <div className="tnx_text_wrap">

                        <div className="mob_hero_img_wrap">
                            <Image className="mob_hero_img" src={Heroimg} alt="Hero image" priority placeholder="blur" />
                        </div>


                        <div className="tnx_demercation1">
                            <h1 className="tnx_header"> <span className="tnx_color">Thank you!
                            </span>  for joining our waitlist.</h1>

                            <p className="tnx_excerpt">Your referral code is <span className="ref_code">
                                bitly/doki20%/signup-meta45</span> <button className="tnx_copy">copy</button> </p>
                        </div>

                        <div className="tnx_demercation2">
                            <h3 className="tnx_excerpt2">View the number of referrals you have</h3>

                            <div className="check_input_wrap">
                                <input type="email" placeholder="Enter your email address" className="check_ref" />
                                <button className="check_ctn" onClick={show_ref_modal}>VIEW REFERRALS</button>
                            </div>
                        </div>

                    </div>

                    <div className="tnx_img_wrap">
                        <Image className="tnx_img" src={Heroimg} alt="Hero image" />
                    </div>

                </div>



            </div>
            {/* socail wrap in the porfolio section */}
            <div className="tnx_social_wrap">
                <h1 className="tnx_footer">Doki</h1>

                <div className="tnx_mob_wrap_footter">
                    <p className="tnx_footer_text">ut aliquip ex consequat</p>

                    <div className="tnx_social_icons">
                        <a className="tnx_soical_link" href=""><Twitter /></a>
                        <a className="tnx_soical_link" href="">   <Linkedin /></a>
                        <a className="tnx_soical_link" href=""> <Facebook /></a>
                        <a className="tnx_soical_link" href=""><Instagram /></a>


                    </div>
                </div>

            </div>

            {
                (ref_modal) ? (
                    <div className="tnx_all_modal" onClick={hide_ref_modal}>
                        <div className="tnx_modal_wrap">
                            <h3 className="tnx_modal_mail">Hey isibordavis@gmail.com</h3>
                            <p className="tnx_modal_excerpt">So far you have reffered;</p>
                            <div className="tnx_modal_num_wrap">
                                <p className="tnx_modal_num">50 <span className="tnx_modal_num_deco">Dokites</span></p>

                                <div className="tnx_modal_num2">
                                    <p>Keep reffering to increae your bonuses!!</p>
                                    <div className="tnx_modal_num2_deco"></div>
                                </div>
                            </div>

                            <h4 className="tnx_modal_ref">Refer someone <span className="tnx_modal_ref_deco">today!</span></h4>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default Tnn;