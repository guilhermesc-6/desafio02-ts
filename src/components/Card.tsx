import { Center, Input,  Box } from "@chakra-ui/react"
import { login } from "../services/login"
import { ButtonCustom } from "./Button"



export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#fdfdfd' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonCustom onClick={login} >
              Button
            </ButtonCustom>
          </Center>
        </Box>
      </Box>
  )
}