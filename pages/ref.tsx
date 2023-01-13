import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Nav from "../components/nav"
import Preloader from "../components/preLoader"


const Ref = () => {

    const [valid, setvalid] = useState("true")
    const [ref, setref] = useState("")

    // next router
    const router = useRouter()
    const { ref_id } = router.query

    useEffect(() => {
        // //      make a post request
        // axios.post('/user', {
        //     ref: ref_id
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, [])

    return (
        <>
            {
                (valid) ? <Preloader /> : <Nav />
            }

        </>
    )
}

export default Ref