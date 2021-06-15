import {
	Flex,
	Heading,
	useColorModeValue,
	Avatar,
	Text,
	Button,
	Box,
	IconButton
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

const Controls = () => {
	
    const cardBackground = useColorModeValue("gray.100", "gray.900");
	const user = {
		name: "wso2",
		avatar_img: "https://th.bing.com/th/id/OIP.czoTouAYtIYcLzXq9JEkFAAAAA?pid=ImgDet&rs=1",
		email: "wso2@gmail.com",
	};

	const data = {
		name: "John Doe",
		department: "Electrical Engineering",
		avatar_img: "https://bit.ly/sage-adebayo",
		email: "john@gmail.com",
		cv: "CV"
	};

	return (
		<Flex 
		width='100%' 
		justifyContent='center' 
		flexDirection="row" 
		mt={3}
		ml={3}
		mr={3}
		>
			<Flex
			shadow='md'
			rounded={6}
			height='-webkit-fit-content'
			background={cardBackground}
			p={3}
			ml={3}
			mr={3}
			flexDirection='column'
			width='40%'>
			<Flex justifyContent='space-between'>
				<Flex alignItems='center'>
					<Flex flexDirection='column'>
						<Heading size='md' mb={5}>
							Controls
						</Heading>
					</Flex>
				</Flex>
				<Flex alignItems='center' flexDirection='column'>
					<Button colorScheme='linkedin' size='lg' height='16' shadow='md'>
						Enable <br/>
						Check In
					</Button>
					<br/>
					<Button colorScheme='orange' size='lg' height='16' shadow='md'>
						Enable <br/>
						Walking
					</Button>
				</Flex>
				<Flex alignItems='center' flexDirection='row'>
					<Button colorScheme='whatsapp' size='lg' height='16' shadow='md'>
						Onboard Next <br/>
						Candidate
					</Button>
				</Flex>
			</Flex>
			</Flex>
            <Flex
			shadow='md'
			rounded={6}
			height='-webkit-fit-content'
			background={cardBackground}
			p={3}
			ml={3}
			mr={3}
			flexDirection='column'
			width='55%'>
			<Flex justifyContent='space-between'>
				<Flex alignItems='center'>
					<Button colorScheme='linkedin' size='lg' height='16' shadow='md'>
						Join <br/>
						Meeting
					</Button>
				</Flex>
				<Flex
				shadow='md'
				rounded={5}
				p={3}
				flexDirection='row'
				mb={5}
				width='100%'
				alignItems='center'
				ml='3'
				mr='3'
				>
					<Avatar
						size='md'
						src={data.avatar_img}
						mr={3}
						backgroundColor='white'
					/>
					<Flex justifyContent='space-between'>
						<Flex alignItems='center'>
							<Flex flexDirection='column'>
								<Text fontSize='larger'>{data.name}</Text>
								<Text fontSize='smaller'>{data.department}</Text>
								<Text fontSize='xs'>{data.email}</Text>
							</Flex>
						</Flex>
					</Flex>
					<Box>
						<Flex background={cardBackground} alignItems='center'>
						<IconButton
							onClick={() => console.log("CV Button Clicked")}
							icon={<ExternalLinkIcon />}
						/>
						<p>CV</p>
						</Flex>
					</Box>
				</Flex>
				<Flex alignItems='center' flexDirection='column'>
					<Button colorScheme='linkedin' size='lg' height='10' shadow='md'>
						Complete
					</Button>
					<br/>
					<Button colorScheme='red' size='lg' height='10' shadow='md'>
						Pass
					</Button>
				</Flex>
			</Flex>
			</Flex>
		</Flex>
	);
};

export default Controls;
