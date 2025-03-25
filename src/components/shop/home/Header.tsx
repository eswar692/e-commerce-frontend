import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { AlignJustify } from "lucide-react";
  import React from "react";
  

const Header: React.FC = () => {
    return (
        <header className=" flex w-full h-18 bg-gray-800  ">
         <div className="w-[25%] flex justify-center items-center md:w-[10%] ">
            <a href="/" className="text-2xl font-bold text-white"> Amazon</a>
         </div>
        <div className="w-[50%] flex  items-center md:w-[20%]">
            <input type="text" className="w-full h-10 px-4 rounded-lg bg-white" placeholder="Search"/>
        </div> 
         <div className="w-[25%] flex  items-center px-5 md:hidden">
            <button className="bg-orange-500  h-10 px-4 rounded-lg text-white"><AlignJustify className="text-white "/></button>
        </div>
         
        <div className=" hidden md:flex ">
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div>
                            <h1>Products</h1>
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink> </NavigationMenuLink>
                            <div>
                                <img src="https://www.google.com/imgres?q=shopping%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fseasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg%3Fw%3D360&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fshopping&docid=KgWPi0h5o0JPtM&tbnid=NySNFu4aEb9ElM&vet=12ahUKEwiOzpyWnKWMAxXg4jgGHU-RFaMQM3oECBUQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwiOzpyWnKWMAxXg4jgGHU-RFaMQM3oECBUQAA" alt="" />
                                <h1>dfgfd</h1>
                            </div>
                       
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
            
        </div>
            
        
      </header>
    );
};

export default Header;