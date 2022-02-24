import { useEffect, useState } from 'react';
import LogoDesktopImg from '../../assets/logo-desktop.svg';
import LogoMobileImg from '../../assets/logo-mobile.svg';

import { Button, Content, Span } from './styles';

export function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  return (
    <Content>
      {width > 792 ? (
        <img src={LogoDesktopImg} alt="logo" />
      ) : (
        <img src={LogoMobileImg} alt="logo" />
      )}
      <div>
        <Span>Home</Span>
        <Span>Menu</Span>
        <Span>Recompensas</Span>
        <Span>Gift Cards</Span>
        <Span>Lojas</Span>
      </div>
      <Button type="button">
        <b>PEGAR MEU CAFÉ</b>
      </Button>
    </Content>
  );
}
