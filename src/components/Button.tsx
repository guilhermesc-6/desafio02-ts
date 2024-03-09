import {  Button } from "@chakra-ui/react"

interface IButton{
    onClick: ()=> void
    children: any
}

export const ButtonCustom  = ({onClick,children}:IButton) => {
  return(
    <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {children}
    </Button>
  )
}
