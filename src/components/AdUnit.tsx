import Script from 'next/script';

type Props = {
  slotId: string;
};

const AdUnit: React.FC<Props> = ({ slotId }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <>
      <Script
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7806906228442371"
      />
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-7806906228442371"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </>
  );
};

export default AdUnit;
