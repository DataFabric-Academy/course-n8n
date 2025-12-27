import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'n8n Fundamentals',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        เรียนรู้พื้นฐาน n8n ตั้งแต่การติดตั้ง การสร้าง Workflow แรก และการเชื่อมต่อกับ Services ต่างๆ
      </>
    ),
  },
  {
    title: 'Workflow Design & Automation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        เรียนรู้การออกแบบ Workflow ที่มีประสิทธิภาพ การทำ Automation, Data Transformation และ Error Handling
      </>
    ),
  },
  {
    title: 'Advanced Integration & Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        เรียนรู้การสร้าง Custom Nodes, Webhooks, API Integration, และการ Deploy n8n ใน Production Environment
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

