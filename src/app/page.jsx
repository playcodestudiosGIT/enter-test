"use client"
import UserCard from "../components/UserCard";
import { users } from "../utils/database"
import { Heading, SimpleGrid, Box, Link } from '@chakra-ui/react'
import { MdAddCircle } from "react-icons/md";


function HomePage() {

  return (
    <>
      <div className="py-2 mb-2 w-full">
        {<Heading as='h2' size='3xl' noOfLines={1}>
          <SimpleGrid columns={2} spacingX='20px' spacingY='20px'>
            <Box>
              Users list
            </Box>
            <box>
              <Link href="/users/new">
                <MdAddCircle size={30} color="green" />
              </Link>
            </box>
          </SimpleGrid>
        </Heading>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {
          users.map(user => (
            <UserCard user={user} key={user.id} />
          ))}
      </div>
    </>


  )
}

export default HomePage