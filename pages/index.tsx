
import { Inter } from '@next/font/google'
import axios from "axios"
import { useEffect, useState } from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Port from '../components/portfolio'
import Router, { useRouter } from 'next/router'
import Bonus_modal from '../components/bonu_modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home(prop: { refid: any; }) {
  const { refid } = prop

  // set the input element
  const [email, setemail] = useState("")
  const [err, seterr] = useState("")
  const [display, setdisplay] = useState(false)
  const [join_text, setjoin_text] = useState("JOIN THE WAITLIST")
  const pattern = /^\S+@\S+\.\S+$/
  const router = useRouter()
  const domain = "http://localhost:3000/"


  // use useeffect to set the email onchange
  useEffect(() => {
    setemail(email)
    seterr("")
  }, [email])


  // set local storage function
  const joined = async () => {
    const validateEmail = pattern.test(email)

    if (email == "") {
      seterr("Please input your email ")
      return
    } else if (!validateEmail) {
      seterr("Input a valid email")
    } else {

      setjoin_text("JOINING.......")
      // make a post request
      axios.post('https://doki-be.vercel.app/api/waitlist', {
        email: email
      })
        .then(function (response) {
          console.log(response);
          const id = response.data.refId
          const ref_id = domain + "ref?refid=" + id
          console.log(ref_id);
          if (response.status == 201) {
            axios.patch('https://doki-be.vercel.app/api/waitlist/verifyRefId', {
              refId: refid
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });


            localStorage.setItem("ref_id", ref_id)
            localStorage.setItem("yes", "checked")
            setjoin_text("JOIN THE WAITLIST")
            // router.push("/tnnn")
          }

        })
        .catch(function (error) {
          const msg = error.response

          console.log(msg);
          if (msg == "Email already exist") {
            seterr("Email already exist")
          }
        });
      // try {
      //   const data = await axios.post('https://doki-be.vercel.app/api/waitlist', {
      //     email: email
      //   })

      //   console.log('data', data)
      // } catch (err: any) {
      //   console.log('err', err)
      //   console.log(typeof err)
      // }


    }



  }




  // useeffect to check storage function
  useEffect(() => {
    const yes = localStorage.getItem("yes")

    if (yes) {
      // router.push("/tnnn")
    }
  }, [])



  return (
    <>
      <head>
        <title>Doki Waitlist</title>

      </head>
      <div className="wrapper">
        <Nav />
        <Hero
          joined={joined}
          setemail={setemail}
          err={err}
          setjoin_text={join_text}
          setdisplay={setdisplay}
        />
        <Port />

      </div>

      {
        (display) ? <Bonus_modal setdisplay={setdisplay} /> : null
      }



    </>
  )
}
