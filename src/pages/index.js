import React from 'react';
import Typist from "react-typist";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import "react-typist/dist/Typist.css";

function HomePge() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<div className="container">
			<Typist
				className="typist-header"
				avgTypingDelay={60}
				cursor={{hideWhenDone: true}}
			>
				Hi there!
			</Typist>
			<br/>

			<Typist
				className="typist-content"
				startDelay={2000}
				cursor={{hideWhenDone: true}}
			>
				{siteConfig.tagline}
				<Typist.Delay ms={1000}/>
				<Link
					to="/docs/intro">
					{' '}Click here to get started!
				</Link>
			</Typist>
		</div>
	);
}

export default function Home() {
	return (
		<Layout>
			<HomePge/>
		</Layout>
	);
}
