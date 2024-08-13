import Script from 'next/script';

// interface ADProps {
//     // Add any props you need here, if any
// }
// export const AdPlaceholder: React.FC<ADProps> = () => {
export default function AdPlaceholder() {
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5345503413113719"
                crossOrigin='anonymous'
            />
        </>
    );
};