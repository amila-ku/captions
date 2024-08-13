import Script from 'next/script';

interface ADProps {
    // Add any props you need here, if any
}
export const AdPlaceholder: React.FC<ADProps> = () => {
    return (
      <div>
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-53%2050%2034%2013%1%3137%2019`} crossOrigin="anonymous"></script>
      </div>
    );
  };