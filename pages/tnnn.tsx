import Nav from "../components/nav";
import Image from "next/image"
import Heroimg from "../public/H_image.png"
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../components/preLoader";

const Tnn = () => {
    const [ref_modal, setRef_modal] = useState(false)
    const [ref_link, setRef_link] = useState('')
    const [loading, setLoading] = useState("VIEW REFFERALS")
    const [copy, setCopy] = useState("copy")
    const [ref_num, setRef_num] = useState("")
    const [email, setemail] = useState("")
    const [user_email, setuser_email] = useState("")
    const [err, seterr] = useState("")


    useEffect(() => {
        seterr("")
    }, [email])
    useEffect(() => {
        const ref_id = localStorage.getItem("ref_id")
        if (ref_id) {
            console.log(ref_id);
            setRef_link(ref_id)
        }
    }, [])

    const hide_ref_modal = () => {
        setRef_modal(false)
    }

    const show_ref_modal = () => {

        if (email == "") {
            seterr("please input your email")
        } else {
            setLoading("LOADING...")
            axios.post('https://doki-be.vercel.app/api/waitlist/refs', {
                email: email
            })
                .then(function (response) {

                    // if (response.status == 200) {
                    console.log(response);
                    const ref_id = response.data.referrals
                    setRef_num(ref_id)
                    setuser_email("Hey " + email)
                    setRef_modal(true)
                    setLoading("VIEW REFFERALS")

                    // }

                })
                .catch(function (error) {
                    setLoading("VIEW REFFERALS")
                    console.log(error);
                });
        }

        // // make a post request

    }

    const copy_clipboard = () => {
        navigator.clipboard.writeText(ref_link);
        setCopy('copied')
    }

    const reverse_copy = () => {
        setCopy('copy')
    }

    useEffect(() => {
        setTimeout(reverse_copy, 3000)
    }, [copy])


    return (
        <>

            {
                (ref_link) ? (
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
                                            {ref_link}</span> <button className="tnx_copy" onClick={copy_clipboard}>{copy}</button> </p>
                                    </div>

                                    <div className="tnx_demercation2">
                                        <h3 className="tnx_excerpt2">View the number of referrals you have</h3>

                                        <div className="check_input_wrap">
                                            <input type="email" autoComplete="email" placeholder="Enter your email address" className="check_ref" onChange={(e) => setemail(e.target.value)} />
                                            <button className="check_ctn" onClick={show_ref_modal}>{loading}</button>
                                        </div>

                                        <p className="tnn_err" style={{ color: "red", textAlign: "center" }}> {err}
                                        </p>
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
                                        <h3 className="tnx_modal_mail">{user_email}</h3>
                                        <p className="tnx_modal_excerpt">So far you have reffered;</p>
                                        <div className="tnx_modal_num_wrap">
                                            <p className="tnx_modal_num">{ref_num} <span className="tnx_modal_num_deco">Dokites</span></p>

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
                ) : <Preloader />
            }
        </>
    )
}

export default Tnn;