import {
	Flex,
	Avatar,
	useColorModeValue
} from "@chakra-ui/react";

const CompanyDetails = () => {
	const cardBackground = useColorModeValue("gray.100", "gray.900");
	const user = {
		name: "wso2",
		avatar_img: "https://th.bing.com/th/id/OIP.czoTouAYtIYcLzXq9JEkFAAAAA?pid=ImgDet&rs=1",
		email: "wso2@gmail.com",
	};
	return (
		<Flex width='100%' justifyContent='center'>
			<Flex
				p={6}
				height='-webkit-fit-content'
				width='40%'
				rounded={6}
				flexDirection='column'
				alignItems='center'
				>
				<Avatar size='2xl' name={user.name} src={user.avatar_img} />
				
			</Flex>
		</Flex>
	);
};

export default CompanyDetails;
