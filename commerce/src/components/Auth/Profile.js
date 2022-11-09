import React from 'react'
import {useAuth} from "../../context/AuthContext"
import {Box, Text, Code} from "@chakra-ui/react"

function Profile() {
  const {user} = useAuth();
  
  return (
    <Box p="10">
      <Text fontSize='5xl'>Profil</Text>
      <Code>{JSON.stringify(user)}</Code>
    </Box>
  )
}

export default Profile