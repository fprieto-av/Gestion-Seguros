import { useEffect, useState } from "react";

/* Loader component */
export default function Loader() {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const onLoad = () => setTimeout(() => setHide(true), 350)
        if(document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }
    }, [])

    return (
        <div className={`loader${hide ? ' hide' : ''}`}>
            <img src="/assets/img/logo.png" alt="" className="loader-logo" />
        </div>
    )
}