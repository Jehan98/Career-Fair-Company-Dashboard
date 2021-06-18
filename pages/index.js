import Link from "next/link";
import { useRouter } from "next/router";
import {
	Flex,
	Box,
	IconButton,
	useColorMode,
	Heading,
	Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Home() {
	const router = useRouter();
	return (
		<Button
			height={100}
			width={100}
			mr={5}
			onClick={() => router.push("/company/dashboard")}
			>
			Company
		</Button>
	)
}
