import { Facebook, Instagram, Linkedin, PersonWorkspace, RocketTakeoffFill, Twitter, VectorPen } from "react-bootstrap-icons"


const Port = () => {

    return (
        <>
            <div className="port_all_wrap">
                {/* portfolio writing wrap */}
                <div className="port_wrap">

                    {/* list 1 */}
                    <div className="each_wrap">
                        {/* icons */}
                        <div className="port_icon_wrap">
                            <RocketTakeoffFill />
                        </div>

                        <p className="port_header">Access real testers</p>

                        <p className="port_excerpt">Duis aute irure dolor in repr ehenderit in voluptate velit</p>
                    </div>

                    {/* list 2*/}

                    <div className="each_wrap">
                        {/* icons */}
                        <div className="port_icon_wrap">
                            <VectorPen />
                        </div>

                        <p className="port_header">Improve design</p>

                        <p className="port_excerpt">Excepteur sint occaecat cup i datat non proident,</p>
                    </div>

                    {/* list 3*/}

                    <div className="each_wrap">
                        {/* icons */}
                        <div className="port_icon_wrap">
                            <PersonWorkspace />
                        </div>

                        <p className="port_header">Accurate feeback</p>

                        <p className="port_excerpt">sunt in culpa qui officia dese w shyo ngst ooiwh.</p>
                    </div>

                </div>


                {/* socail wrap in the porfolio section */}
                <div className="social_wrap">
                    <h1 className="footer">Doki</h1>

                    <div className="mob_wrap_footter">
                        <p className="footer_text">ut aliquip ex consequat</p>

                        <div className="social_icons">
                            <a className="soical_link" href=""><Twitter /></a>
                            <a className="soical_link" href="">   <Linkedin /></a>
                            <a className="soical_link" href=""> <Facebook /></a>
                            <a className="soical_link" href=""><Instagram /></a>


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Port