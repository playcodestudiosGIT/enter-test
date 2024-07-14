
"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { addUsersDB, getUsersDB, updateUsersDB } from '../../../utils/database'
import { useRouter, useParams } from 'next/navigation'
import { Input, InputGroup, InputLeftElement, Stack, Heading, Container, Textarea, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { MdGrid3X3, MdOutlinePerson, MdImage, MdTransgender, MdOutlineDirections, MdOutlineInfo } from "react-icons/md";


const FormPage = () => {
	const router = useRouter();
	const params = useParams();





	const [newUser, setNewUser] = useState({
		"id": "User id",
		"name": "User name",
		"email": "user@mail.com",
		"balance": "$0.00",
		"picture": "Url picture",
		"gender": "Gender",
		"address": "Address",
		"about": "About"
	});



	const handleSubmitCreate = (e: FormEvent) => {

		e.preventDefault();

		try {
			if (newUser["id"] === "" || newUser["name"] === "" || newUser["email"] === "" || newUser["balance"] === "") {
				console.log('error');
				throw new Error('Faltan campos');
			}
			console.log(newUser);
			addUsersDB(newUser);
			router.push('/');
			router.refresh();
		} catch (error) {
			console.log(error);
		}

	}

	const handleSubmitUpdate = (e: FormEvent) => {

		e.preventDefault();

		try {
			if (newUser["id"] === "" || newUser["name"] === "" || newUser["email"] === "" || newUser["balance"] === "") {
				console.log('error');
				throw new Error('Faltan campos');
			}

			updateUsersDB(newUser.id, newUser);
			router.push('/');
			router.refresh();
		} catch (error) {
			console.log(error);
		}

	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	}

	useEffect(() => {
		if (params) {
			const user = getUsersDB(params.id);
			if (user) {
				setNewUser(user);
			}

		}
	}, []);


	return (
		<>
			<div className="py-2 mb-2">
				{<Heading as='h2' size='3xl' noOfLines={1}>
					{
						!params.id ? "Create User" : "Update User"
					}
				</Heading>}
			</div>
			<Container height={30}>

			</Container>
			<Container centerContent >
				<Stack spacing={4} maxWidth={400} >

					<InputGroup>

						<InputLeftElement pointerEvents='none'>
							<MdGrid3X3 />
						</InputLeftElement>

						<Input placeholder={newUser.id} onChange={handleChange} name='id' required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<MdOutlinePerson />
						</InputLeftElement>
						<Input placeholder={newUser.name} onChange={handleChange} name='name' required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<EmailIcon color='gray.600' />
						</InputLeftElement>
						<Input type='mail' placeholder={newUser.email} onChange={handleChange} name='email'  required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none' color='gray.600' fontSize='1.2em'>
							$
						</InputLeftElement>
						<Input placeholder={newUser.balance} onChange={handleChange} name='balance' required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<MdImage />
						</InputLeftElement>
						<Input placeholder={newUser.picture} onChange={handleChange} name='picture'  required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<MdTransgender />
						</InputLeftElement>
						<Input placeholder={newUser.gender} onChange={handleChange} name='gender' required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<MdOutlineDirections />
						</InputLeftElement>
						<Textarea placeholder={newUser.address} pl={39} onChange={handleChange} name='address' required />
					</InputGroup>

					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<MdOutlineInfo />
						</InputLeftElement>
						<Textarea placeholder={newUser.about} pl={39} onChange={handleChange} name='about'required />
					</InputGroup>
				</Stack>
				<Container height={10} />

				<ButtonGroup spacing='2'>
					{
						params.id ? <Button variant='solid' colorScheme='green' onClick={handleSubmitUpdate} >
							Update
						</Button> : <Button variant='solid' colorScheme='green' onClick={handleSubmitCreate} >
							Create
						</Button>
					}
					<Button variant='solid' colorScheme='red' onClick={() => {
						router.push('/');
						router.refresh();
					}
					}>
						Cancel
					</Button>
				</ButtonGroup>
				<Container height={100} />
			</Container>
		</>
	)
}

export default FormPage



