import { message } from "antd"
import Container from "../container/Container"
import React, { MouseEvent } from "react"


const Contact = () => {
  const form = React.createRef<HTMLFormElement>()


  const handleMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    message.success('Thank you for subscribing!')
    form.current?.reset()

  }
  return (
    <div className="w-full flex items-center justify-center py-10  mb-10 ">
      <Container>
        <div className=" flex flex-col gap-10 items-center w-full max-w-[900px]  mx-auto bg-gray-100 py-20 ">
          <h2 className="text-3xl font-bold">
            Be the first to know about sales and new products!
          </h2>
          <form ref={form} className="w-full flex items-center justify-between gap-3 max-w-[350px] py-2 borber-b border-black bg-white px-5">
            <input className="w-full !bg-transparent outline-none" type="email" placeholder="Enter your email" required />
            <button onClick={(e) => handleMessage(e)} type="reset" className="text-sky-500">Subscribe</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Contact
