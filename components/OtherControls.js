import {
	Flex,
	Heading,
	useColorModeValue,
	Button,
} from "@chakra-ui/react";

const OtherControls = ({cardBackground}) => {
    return (
        <Flex
        shadow='md'
        rounded={6}
        height='-webkit-fit-content'
        background={cardBackground}
        p={3}
        mr={3}
        flexDirection='column'
        width='45%'
        overflow='auto'>
        <Flex justifyContent='space-between' mr='3' p={1}>
            <Flex p={2}>
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
    )
}

export default OtherControls
