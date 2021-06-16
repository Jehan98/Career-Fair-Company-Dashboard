import {
	Flex,
	Heading,
	useColorModeValue,
	Button,
} from "@chakra-ui/react";

import ControlCurrentCandidate from "./ControlCurrentCandidate";
import OtherControls from "./OtherControls";

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
		ml={3}
		mt={3}
		>
			<OtherControls cardBackground={cardBackground} />
			<ControlCurrentCandidate data={data} cardBackground={cardBackground} />
		</Flex>
	);
};

export default Controls;
