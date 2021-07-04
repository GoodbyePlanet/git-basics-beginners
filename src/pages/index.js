import React, {useEffect, useState} from 'react';
import Typist from "react-typist";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

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
				{siteConfig.title}
			</Typist>
			<br/>

			<Typist
				className="typist-content"
				startDelay={2000}
				cursor={{hideWhenDone: true}}
			>
				{siteConfig.tagline}<Typist.Delay ms={500}/>
				<Typist.Backspace count={siteConfig.tagline.length} delay={200}/>
				<Typist.Delay ms={100}/>Who cares{', '}
				<Link
					to="/docs/intro">
					Let's learn git basics!
				</Link>
			</Typist>
		</div>
	);
}

function BackgroundImage() {
	const {isDarkTheme} = useThemeContext();
	const [imageSource, setImageSource] = useState("");

	useEffect(() => {
		if (isDarkTheme) {
			setImageSource("/img/git-background-dark.svg");
		} else {
			setImageSource("/img/git-background.svg")
		}
	}, [isDarkTheme])

	return (
		<img className="background-image" src={imageSource} alt="background-image"/>
	)
}

export default function Home() {
	return (
		<Layout>
			<BackgroundImage/>
			<HomePge/>
		</Layout>
	);
}
