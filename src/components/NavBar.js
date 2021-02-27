import React, { useContext } from "react"
import { Flex, Icon, Image, Text } from "@chakra-ui/react"
import { ShopContext } from "../context/shopContext"
import { MdMenu, MdShoppingCart } from "react-icons/md"

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Flex
      backgroundColor="#1f171c"
      flexDirection="row"
      justifyContent="space-between"
      padding="2rem"
    >
      <Icon fill="white" as={MdMenu} width={35} height={35}>
        Menu
      </Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        width={50}
        height={50}
      />
      <Icon
        fill="white"
        as={MdShoppingCart}
        width={30}
        height={30}
        onClick={() => openCart()}
      >
        Cart
      </Icon>
    </Flex>
  )
}

export default NavBar
