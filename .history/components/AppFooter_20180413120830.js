import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
const AppFooter = () => (
	<Footer>
		<FooterTab>
			<Button active>
				<Text>Topics</Text>
			</Button>
			<Button>
				<Text>Podcasts</Text>
			</Button>
		</FooterTab>
	</Footer>
);
export default AppFooter;