import Nav from "./components/nav";
import Image from "next/image"
import Heroimg from "../public/H_image.png"

const Tnn = () => {


    return (
        <> <body>
            <div className="wrapper">
                <Nav />

                {/* thank you for joinging our waitlist page design */}

                <div className="tnx_all_wrap">

                    <div className="tnx_text_wrap">
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
                                <button className="check_ctn">VIEW REFERRALS</button>
                            </div>
                        </div>

                    </div>

                    <div className="tnx_img_wrap">
                        <Image className="tnx_img" src={Heroimg} alt="Hero image" />
                    </div>

                </div>



            </div>
        </body>

        </>
    )
}

export default Tnn;