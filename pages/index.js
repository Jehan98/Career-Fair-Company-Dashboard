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
  return (
    <Button height={100} width={100}>
						<Link href='/company/dashboard'>Recruiter</Link>
		</Button>
  )
}
