import { Flex } from "@chakra-ui/react";

import CompanyHeader from "../../components/CompanyHeader";
import CompanyFooter from "../../components/CompanyFooter";
import CompanyDetails from "../../components/CompanyLogo";
import CompanySessions from "../../components/CompanySessions";
import Interviews from "../../components/Interviews";
import Controls from "../../components/Controls";

const dashboard = () => {
	return (
		<Flex
			height='100vh'
			flexDirection='column'
			padding={5}
			backgroundImage='https://bit.ly/3yXTlvM'>
			<CompanyHeader />
			<Flex flexDirection='row' mt={5}>
				<Flex flexDirection='column' width="25%" mt={5}>
					<CompanyDetails />
					<CompanySessions />
				</Flex>
				<Flex flexDirection='column' width="60%" mt={5}>
					<Interviews />
					<Controls />
				</Flex>
			</Flex>
			
			<CompanyFooter />
				
		</Flex>
	);
};

export default dashboard;
