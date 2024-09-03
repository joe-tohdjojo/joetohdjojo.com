import Image from 'next/image';
import Link from 'next/link';
import img from '@/assets/homepage-img.png';
import AdUnit from '@/components/AdUnit';

const data = {
  email: 'joe.tohdjojo@gmail.com',
  job: {
    title: 'Staff Engineer',
    company: 'The Daily Beast',
    companyWebsite: 'https://www.thedailybeast.com/',
  },
  links: [
    {
      text: 'Github',
      href: 'https://github.com/joseph-tohdjojo',
    },
    {
      text: 'Email',
      href: 'mailto:joe.tohdjojo@gmail.com?Subject=Hey%20Joe',
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/josephtohdjojo/',
    },
    {
      text: 'CodePen',
      href: 'https://codepen.io/mrhamburger/',
    },
    {
      text: 'Resume',
      href: '/resume.pdf',
    },
  ],
};

export default function Home() {
  const { email, job, links } = data;

  return (
    <>
      <header>
        <h1 className="text-base font-bold leading-none">
          <Link href={`mailto:${email}?Subject=Hey%20Joe`}>Joe Toh Djojo</Link>
        </h1>
        <p className="text-[11px] leading-[1.4]">
          {job.title} @{' '}
          <Link
            className="underline hover:text-gray-500"
            href={job.companyWebsite}
          >
            {job.company}
          </Link>
        </p>
      </header>
      <main className="mx-auto flex w-[300px] flex-col items-start self-center sm:w-[480px] lg:w-[600px]">
        <div>
          {links.map(({ text, href }) => (
            <Link
              key={text}
              className="mr-2 text-xs hover:text-gray-500"
              href={href}
              target="_blank"
            >
              {text}
            </Link>
          ))}
        </div>
        <Image
          alt="A random photo"
          className="my-1"
          src={img.src}
          width={img.width}
          height={img.height}
        />
        <div className="mt-1 self-end text-[9px] text-gray-500">
          ©&nbsp;{new Date().getFullYear()}&nbsp;Joe Toh Djojo
        </div>
      </main>
      <AdUnit slotId="9081277198" />
    </>
  );
}
