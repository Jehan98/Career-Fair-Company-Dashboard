import { Flex } from "@chakra-ui/react";

import CompanyHeader from "../../components/CompanyHeader";
import CompanyFooter from "../../components/CompanyFooter";
import CompanyDetails from "../../components/CompanyDetails";
import Interviews from "../../components/Interviews";
import Controls from "../../components/Controls";
import CompanySessions from "../../components/CompanySessions";
import Panel from "../../components/Panel";

const dashboard = () => {
	return (
		<Flex
			height='100vh'
			flexDirection='column'
			backgroundImage='https://bit.ly/3yXTlvM'>
			<CompanyHeader />
			<Flex flexDirection='row' mt={5} >
				<Flex flexDirection='column' width="25%" ml={3} mr={3}>
					<Panel />
					<CompanyDetails />
					<CompanySessions />
				</Flex>
				<Flex flexDirection='column' width="45%" mr={3}>
					<Interviews />
				</Flex>
				<Flex flexDirection='column' width="30%" mr={3}>
					<Controls/>
				</Flex>
			</Flex>
				
		</Flex>
	);
};

export default dashboard;
