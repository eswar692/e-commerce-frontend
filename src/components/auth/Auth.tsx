import { Outlet } from "react-router-dom"


const Auth = () => {
  return (
    <div>
      <div  className=" md:flex w-full h-screen md:bg-[url('https://app.easysocial.io/static/images/jpg/2.jpg')] md:bg-no-repeat md:bg-cover md:bg-left md:justify-end pr-8 filter md:brightness-100 ">
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
        <div className=" absolute top-0 h-screen md:w-[40%] xl:w-[25%] bg-white w-full">
          <Outlet/>
        </div>
        <div className="hidden md:flex absolute top-5 left-15 text-white"> <h3 className="text-3xl">Pro Daddy Agency</h3></div>
        <div className="hidden md:flex absolute bottom-10 left-15 text-white"> <h3 className="text-3xl">Shopping is aultimate way </h3></div>

      </div>
      
    </div>
  )
}

export default Auth