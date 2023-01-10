import Image from "next/image"
import Heroimg from "../../public/H_image.png"
import Head_img from "../../public/Head_img.png"


const Hero = () => {

    return (
        <>
            <div className="Hero_wrap">
                <div className="Hero_txt_wrap">
                    {/* hero header text */}
                    <h1 className="Hero_head">
                        <span className="Hero_head1">DOKI,</span>
                        the designers link to real
                        <span className="Hero_head2">Testers. <Image className="Head_img" src={Head_img} alt="head_image" /> </span>
                    </h1>

                    {/* hero excerpt text */}
                    <p className="Hero_excerpt">Be the first to know when we launch</p>

                    {/*collect user emails */}
                    <div className="Hero_input_wrap">
                        <input type="text" className="Hero_input" placeholder="Enter your email address" />
                        <button className="Hero_btn">JOIN THE WAITLIST</button>
                    </div>
                    {/* hero excerpt two */}
                    <p className="Hero_excerpt2">A unique referral code will be generated for you, explore the
                        <span className="bonus_link" > bonuses </span>
                        that awaits you when you join the waitlist and refer people.</p>

                </div>

                <div className="Hero_img_wrap">
                    <Image className="Hero_img" src={Heroimg} alt="Hero image" />
                </div>
            </div>

        </>
    )
}

export default Hero