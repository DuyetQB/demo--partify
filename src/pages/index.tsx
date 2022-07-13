import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
      <h1 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
      <h2 className="text-lg font-semibold">Next js Boilerplate Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{' '}
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <img
          src="data:image/jpeg;base64,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"
          width={400}
          height={400}
        />

        <img
          src="data:image/jpeg;base64,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"
          width={400}
          height={400}
        />
        <li>
          <span role="img" aria-label="rainbow">
            🌈
          </span>{' '}
          Include a FREE minimalist theme
        </li>
        <li>
          <span role="img" aria-label="hundred">
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role="img" aria-label="white_check_mark">
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
      <h2 className="text-lg font-semibold">Our Stater code Philosophy</h2>
      <ul>
        <li>Minimal code</li>
        <li>SEO-friendly</li>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Production-ready
        </li>
      </ul>
      <p>
        Check our GitHub project for more information about{' '}
        <a href="https://github.com/ixartz/Next-js-Boilerplate">
          Nextjs Boilerplate
        </a>
        . You can also browse our{' '}
        <a href="https://creativedesignsguru.com/category/nextjs/">
          Premium NextJS Templates
        </a>{' '}
        on our website to support this project.
      </p>
    </Main>
  );
};

export default Index;
