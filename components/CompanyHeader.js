import {
	Flex,
	useColorMode,
	Box,
	IconButton,
	Button,
	Heading,
} from "@chakra-ui/react";
import { LockIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const CompanyHeader = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex width='100%' alignItems='center' justifyContent='space-between'>
			<Heading size='md' color='white'>
				EE Career Fair 2021 | Company Dashboard
			</Heading>
			<Flex>
				<Box>
					<IconButton
						onClick={() => console.log("Logout Button Clicked")}
						icon={<LockIcon />}
					/>
				</Box>
				<Box ml={2}>
					<IconButton
						onClick={toggleColorMode}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					/>
				</Box>
				<Box ml={2}>
					<Flex alignItems='center'>
						<Button colorScheme='red'>Log Out</Button>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};

export default CompanyHeader;
