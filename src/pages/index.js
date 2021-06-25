import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';

import styles from './index.module.css';

function HomePge() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className="text--center">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Let's get started ⏱️
          </Link>
        </div>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}>
      <HomePge />
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  );
}
