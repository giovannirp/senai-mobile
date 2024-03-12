import Logo from '../../assets/img/banner.jpg';
import './style.css';

export function Banner() {
    return (
      <section>
        <div className="banner">
            <img src={Logo} alt="Imagem banner" />
        </div>
      </section>
    );
  }