import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Home from "."
import Nav from "../components/nav"
import Preloader from "../components/preLoader"


const Ref = () => {

    const [valid, setvalid] = useState(true)
    const [ref, setref] = useState("")

    // next router
    const router = useRouter()
    const { refid } = router.query



    useEffect(() => {
        // //      make a post request
        // axios.patch('https://doki-be.vercel.app/api/waitlist/verifyRefId', {
        //     refId: refid
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     }); 
        setvalid(false)
    }, [])

    return (
        <>
            {
                (valid) ? <Preloader /> : <Home refid={refid} />
            }

        </>
    )
}

export default Ref