import Icons from "@/components/atoms/Icons";
import Logo from "@/components/atoms/Logo";
import Style from "./header.module.scss";
import { useEffect, useState } from "react";
import eventBus from "@/assets/scripts/utils/eventBus";
import Button from "@/components/atoms/Button";
import useIsMobile from "@/assets/scripts/hooks/useIsMobile";

const index = (props: { url: string }) => {
  const { url } = props;
  const path = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Projets",
      path: "/projets",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if ((window as any).swup) {
      (window as any).swup.hooks.on("animation:in:end", () => {
        (window as any).lenis.start()
        eventBus.dispatch("startSpltjs")
      });
    }
  }, [])


  return (
    <>
      <header className={`${Style.header} ${visible ? "" : Style.hidden}`}>
        <a href="/">
          <Logo type="classic" />
        </a>
        <nav>
          <ul>
            {path.map((el, index) => {
              return (
                <li
                  key={el.name}
                  className={`${el.path === url ? Style.active : ""}`}
                >
                  <a href={el.path}>
                    <p>{el.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button link="mailto:contact@podium.com" target="_blank" type="stroke">
          Écrivez-nous
        </Button>
      </header>
<header
        className={`${Style.header__mobile} ${isOpen ? Style.open : Style.close}`}
      >
        <a href="/">
          <Logo type="invert" />
        </a>
        <button
          className={`${isOpen ? Style.open : ""}`}
          aria-label="Ouvrir"
          onClick={() => {
            setIsOpen(!isOpen)
            setIsOpen((value: any) => {
              if (value) {
                (window as any).lenis.stop()
              }else{
                (window as any).lenis.start()
              }
              return value
            })
          }}
        >
          <Icons type="burger" />
        </button>
        <div id={Style.menu}>
          <nav>
            <ul>
              {path.map((el, index) => {
                return (
                  <li
                    key={el.name}
                    className={`${el.path === url ? Style.active : ""}`}
                  >
                    <a href={el.path}>
                      <p>{el.name}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
