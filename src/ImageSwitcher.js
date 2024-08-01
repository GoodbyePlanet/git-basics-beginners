import React from 'react';
import { useColorMode } from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

const ImageSwitcher = ({lightImageSrc, darkImageSrc}) => {
	const { isDarkTheme } = useColorMode();

	return (
		<img src={isDarkTheme ? darkImageSrc : lightImageSrc} alt="Example banner" />
	)
}

export default ImageSwitcher;