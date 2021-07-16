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
				<Link
					to="https://productdock.com/">
					{' ' + siteConfig.customFields.company}
				</Link><Typist.Delay ms={500}/>
				<Typist.Backspace count={siteConfig.tagline.length + siteConfig.customFields.company.length + 1} delay={200}/>
				<Typist.Delay ms={100}/>Who cares{', '}
				<Link
					to="/docs/intro">
					Let's learn git basics!
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
