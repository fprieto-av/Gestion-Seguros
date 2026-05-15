import {useState, useEffect} from 'react';

export default function CookieBanner(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('gs-cookies-ok')){
            setTimeout(() => setVisible(true), 900)
        }
    }, [])

    const accept = () => {
        localStorage.setItem('gs-cookies-ok', '1');
        setVisible(false)
    }

    if (!visible) return null;

    return (
      <div className="cookies show">
        <p>
          Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptás nuestra{' '}
          <a href="#">política de privacidad</a>.
        </p>
        <button onClick={accept}>Aceptar</button>
      </div>
    )
  }