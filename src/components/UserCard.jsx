import React from 'react'
import { useRouter } from 'next/navigation'
import { Card, Text, CardBody, ButtonGroup, Button, CardFooter, Image, Stack, Heading, Divider } from '@chakra-ui/react'
import { deleteUserDB } from '../utils/database';




function UserCard({ user }) {
	const router = useRouter();

	const handleDelete = (id) => {
		try {
			console.log(id);
			deleteUserDB(id);
			router.push('/');
			router.refresh();
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src={user.picture}
					alt='Image Placeholder'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{user.name}</Heading>
					<Text color='gray.300' fontSize='sm'>EMAIL</Text>
					<Text>{user.email}</Text>
					<Text color='gray.300' fontSize='sm'>ADDRESS</Text>
					<Text>{user.address}</Text>
					<Text color='gray.300' fontSize='sm'>BALANCE</Text>
					<Text color='gray.600' fontSize='2xl'>{user.balance}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Button
						variant='ghost'
						colorScheme='blue'
						onClick={() => {
							router.push(`/users/${user.id}`);
							router.refresh();
						}} >
						Edit
					</Button>
					<Button
						variant='ghost'
						colorScheme='red'
						onClick={
							() => handleDelete(user.id)
							}>
					Delete
				</Button>
			</ButtonGroup>
		</CardFooter>
		</Card >
	)
}

export default UserCard

// "id": "",
// "name": "",
// "email": "",
// "balance": "",
// "picture": "",
// "gender": "",
// "address": "",
// "about": ""