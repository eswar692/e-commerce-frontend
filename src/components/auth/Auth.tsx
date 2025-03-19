import { Outlet } from "react-router-dom"


const Auth = () => {
  return (
    <div>
      <div  className="hidden md:flex w-full h-screen bg-[url('https://app.easysocial.io/static/images/jpg/2.jpg')] bg-no-repeat bg-cover bg-left justify-end pr-8 filter brightness-100 ">
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
        <div className=" absolute top-0 h-screen md:w-[40%] xl:w-[25%] bg-white">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Auth