import {LuExternalLink} from "react-icons/lu";
import {MainHeading} from "../components/secondry/Heading";
import Section from "../components/secondry/Section";

const About = () => {
  return (
    <article className="mx-auto w-full max-w-175 px-1 py-2">
      <Section>
        <MainHeading text="Introduction" />
        <p className="text-(--muted) leading-7">
          I'm Avusala Chetan, a full-stack developer who builds web apps with React, Node.js, and MongoDB into working products. I'm especially interested in developer tools,
          authentication systems, and building end-to-end experiences across the
          frontend and backend.
        </p>
      </Section>

      <Section>
        <MainHeading text="Background" />
        <p className="text-(--muted) leading-7">
          I'm a final-year Electronics and Communication Engineering student who
          was drawn toward full-stack development through building complete
          products. This gave me a practical way to apply my engineering studies.
          Working with MERN and TypeScript has taught me how frontend, backend,
          databases, and deployment fit together.
        </p>
      </Section>

      <Section>
        <MainHeading text="What I work with" />
        <p className="text-(--muted) leading-7">
          I work primarily with React, Redux Toolkit, and TypeScript on the
          frontend, and Node.js, Express, MongoDB, REST APIs, and JWT
          authentication on the backend. In Watchly, I've used cursor-based
          pagination and dual-token authentication to keep the video feed and
          session handling responsive.
        </p>
      </Section>

      <Section>
        <MainHeading text="Highlights" />
        <ul className="flex list-disc flex-col gap-2 pl-5 text-(--muted)">
          <li>
            Published{" "}
            <a
              href="https://www.npmjs.com/package/express-jetstart"
              target="_blank"
              rel="noreferrer"
              className="text-(--text) underline decoration-(--border) underline-offset-4 transition-colors hover:text-(--accent)"
            >
              express-jetstart
            </a>{" "}
            on npm, a CLI that scaffolds Express.js projects with a chosen setup.
            1,300+ total downloads.
          </li>
          <li>
            Building Watchly, a full-stack video streaming app with JWT auth,
            Cloudinary uploads, and cursor-based infinite scroll that loads more
            videos as you scroll without reloading the feed.
          </li>
          <li>
            Contributed{" "}
            <a
              href="https://github.com/ig-imanish/mx-icons/pull/59"
              target="_blank"
              rel="noreferrer"
              className="text-(--text) underline decoration-(--border) underline-offset-4 transition-colors hover:text-(--accent)"
            >
              a JavaScript icon to mx-icons
            </a>
            , adding six React component variants and registering it in the
            library metadata for release v1.1.2.
          </li>
        </ul>
      </Section>

      <Section>
        <MainHeading text="What I'm looking for" />
        <p className="text-(--muted) leading-7">
          I'm looking for a MERN or full-stack developer internship where I can
          contribute to meaningful projects, work with experienced engineers, and
          deepen my backend and system-design skills.
        </p>
      </Section>

      <Section>
        <p className="mb-3 text-sm text-(--muted)">
          Interested in working together? View resume or get in touch.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="mailto:avusalachetan@gmail.com"
            className="inline-flex h-9 items-center gap-2 border border-(--border) px-3 text-sm font-medium text-(--text) transition-colors hover:bg-(--border)"
          >
            Get in touch
            <LuExternalLink className="size-3.5" />
          </a>
          <a
            href="/pdfs/Avusala_Chetan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 border border-(--border) px-3 text-sm font-medium text-(--text) transition-colors hover:bg-(--border)"
          >
            View resume
            <LuExternalLink className="size-3.5" />
          </a>
        </div>
      </Section>
    </article>
  );
};

export default About;