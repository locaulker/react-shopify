import React, { useContext } from "react"
import { Flex, Icon, Image, Text } from "@chakra-ui/react"
import { ShopContext } from "../context/shopContext"
import { MdMenu, MdShoppingBasket } from "react-icons/md"

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDirection="row"
      justifyContent="space-between"
      padding="2rem"
    >
      <Icon fill="white" as={MdMenu} width={30} height={30}>
        Menu
      </Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        width={100}
        height={100}
      />
      <Icon fill="white" as={MdShoppingBasket} width={30} height={30}>
        Cart
      </Icon>
    </Flex>
  )
}

export default NavBar
