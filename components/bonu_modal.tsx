

const Bonus_modal = (props: { setdisplay: any; }) => {

    const { setdisplay } = props

    const hideBonus = () => {
        setdisplay(false)
    }

    return (
        <>
            <div className="bonus_all_wrap" onClick={hideBonus}>
                <div className="bonus_wrap">
                    <h3 className="bonus_header"> The bonus for your referrals include;</h3>

                    <div className="bonus_list_wrap">
                        <div className="bonus_li"> <div className="bonus_list_deco"></div> <p className="bonus_text">
                            As a <span className="bonus_deco" > designer; </span> you get 4 free User testing for your project per 10 refferals.
                        </p>  </div>

                        <div className="bonus_li"> <div className="bonus_list_deco"></div> <p className="bonus_text">
                            As a <span className="bonus_deco" >User tester; </span> you get to be chosen <span className="bonus_deco" >Automatically</span>  to test a project and get paid.
                        </p>
                        </div>
                    </div>

                    <p className="bonus_ctn">Refer someone <span className="bonus_deco2">Today!</span></p>
                </div>
            </div>
        </>
    )
}

export default Bonus_modal