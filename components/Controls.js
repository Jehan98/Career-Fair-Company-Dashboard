import {
	Flex,
	Heading,
	useColorModeValue,
	Avatar,
	Text,
	Button,
} from "@chakra-ui/react";

const Controls = () => {
	
    const cardBackground = useColorModeValue("gray.100", "gray.900");
	const user = {
		name: "wso2",
		avatar_img: "https://th.bing.com/th/id/OIP.czoTouAYtIYcLzXq9JEkFAAAAA?pid=ImgDet&rs=1",
		email: "wso2@gmail.com",
	};

	return (
		<Flex width='100%' justifyContent='center' flexDirection="row" mt={3}>
			<Flex
				p={3}
				height='-webkit-fit-content'
				width='50%'
				rounded={6}
				background={cardBackground}
				flexDirection='column'
				alignItems='center'
				shadow='md'
				ml={3}
				mr={3}>
                <Avatar size='2xl' name={user.name} src={user.avatar_img} />
			</Flex>
            <Flex
				p={3}
				height='-webkit-fit-content'
				width='50%'
				rounded={6}
				background={cardBackground}
				flexDirection='column'
				alignItems='center'
				shadow='md'
				ml={3}
				mr={3}>
                <Avatar size='2xl' name={user.name} src={user.avatar_img} />
			</Flex>
		</Flex>
	);
};

export default Controls;
