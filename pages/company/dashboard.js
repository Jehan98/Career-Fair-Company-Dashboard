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
			padding={5}
			backgroundImage='https://bit.ly/3yXTlvM'>
			<CompanyHeader />
			<Flex flexDirection='row' mt={5}>
				<Flex flexDirection='column' width="25%" >
					<Panel />
					<CompanyDetails />
					<CompanySessions />
				</Flex>
				<Flex flexDirection='column' width="45%" >
					<Interviews />
				</Flex>
				<Flex flexDirection='column' width="30%" >
					<Controls/>
				</Flex>
			</Flex>
				
		</Flex>
	);
};

export default dashboard;
