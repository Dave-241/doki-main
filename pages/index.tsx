
import { Inter } from '@next/font/google'
import axios from "axios"
import { useEffect, useState } from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Port from './components/portfolio'
import Router, { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // set the input element
  const [email, setemail] = useState("")
  const [err, seterr] = useState("")
  const [join_text, setjoin_text] = useState("JOIN THE WAITLIST")
  const pattern = /^\S+@\S+\.\S+$/
  const router = useRouter()

  // use useeffect to set the email onchange
  useEffect(() => {
    setemail(email)
    seterr("")
  }, [email])


  // set local storage function
  const joined = () => {
    const validateEmail = pattern.test(email)

    if (email == "") {
      seterr("Please input your email")
      return
    } else if (!validateEmail) {
      seterr("Input a valid email")
    } else {

      if (localStorage.getItem("yes")) {
        // router.push("/tnnn")

      } else {
        // make a post request
        // axios.post('/user', {
        //   firstName: 'Fred',
        //   lastName: 'Flintstone'
        // })
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        localStorage.setItem("yes", "checked")
      }

    }
    console.log(email);
  }



  // useeffect to check storage function
  useEffect(() => {
    const yes = localStorage.getItem("yes")

    if (yes) {
      console.log("working");
      // router.push("/tnnn")
    }
  }, [])



  return (
    <>

      <div className="wrapper">
        <Nav />
        <Hero
          joined={joined}
          setemail={setemail}
          err={err}
          setjoin_text={join_text}
        />
        <Port />
      </div>


    </>
  )
}
