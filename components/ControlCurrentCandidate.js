import {
	Flex,
	Avatar,
	Text,
	Button,
	Box,
	IconButton,
	Spacer
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

const CurrentCandidate = ({data, cardBackground}) => {
    return (
        <Flex
			shadow='md'
			rounded={6}
			height='-webkit-fit-content'
			background={cardBackground}
			p={3}
			ml={3}
			flexDirection='column'
			width='55%'
			overflow='auto'>
			<Flex justifyContent='space-between' mt={3} p={2}>
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
				ml={5}
				mr={5}>
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
				<Flex alignItems='center' flexDirection='column'mr='3'>
					<Button colorScheme='whatsapp' size='lg' height='10' shadow='md'>
						Complete
					</Button>
					<br/>
					<Button colorScheme='red' size='lg' height='10' shadow='md'>
						Pass
					</Button>
				</Flex>
			</Flex>
			</Flex>
    )
}

export default CurrentCandidate
