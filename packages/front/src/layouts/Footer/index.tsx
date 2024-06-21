import Icons from "@/components/atoms/Icons";
import Style from "./footer.module.scss";
import Logo from "@/components/atoms/Logo";

const index = () => {
  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.footer_header}>
          <h4>Rejoins notre communauté</h4>
          <div className={Style.footer_header_right}>
            <div>
              <input placeholder="Adresse E-mail" type="text" name="" id="" />
              <button>
                <p className="bi-small-body">S’inscrire</p>{" "}
                <span>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_486_89)">
                      <path
                        d="M22.5 10.9998L18.9791 7.479V10.3069H0.5V11.6928H18.9791V14.5208L22.5 10.9998Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_486_89">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
            <p>Pas de publicité. Pas de suivi. Pas d'engagement</p>
          </div>
        </div>
        <div className={Style.footer_mid}>
          <a href="/">
            <Logo type="classic" />
          </a>
          <nav>
            <ul>
              <h5 className="bi-small-heading">Liens</h5>
              <li>
                <a href="/">
                  <p>Accueil</p>
                </a>
              </li>
              <li>
                <a href="/projets">
                  <p>Projets</p>
                </a>
              </li>
              <li>
                <a href="/services">
                  <p>Services</p>
                </a>
              </li>
            </ul>
            <ul>
              <h5 className="bi-small-heading">Services</h5>
              <li>
                <p>Campagnes publicitaires</p>
              </li>
              <li>
                <p>Maquette de solutions digitales</p>
              </li>
              <li>
                <p>Marketing de contenu</p>
              </li>
              <li>
                <p>Gestion des relations médias</p>
              </li>
              <li>
                <p>Événements médiatiques</p>
              </li>
              <li>
                <p>Sponsoring, mécénat </p>
              </li>
            </ul>
            <ul>
              <h5 className="bi-small-heading">Support</h5>
              <li>
                <a href="/">
                  <p>FAQ</p>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h5 className="bi-small-heading">Suiver-nous</h5>
            <ul>
              <li>
                <Icons type="facebook" />
              </li>
              <li>
                <Icons type="linkedin" />
              </li>
              <li>
                <Icons type="behance" />
              </li>
              <li>
                <Icons type="x" />
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.footer_bottom}>
          <p>Copyright © 2024 Podium. Tout droits réservés.</p>
          <div>
            <p>Mentions légales</p>
            <p>Confidentialité</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
