import { Link } from "react-router-dom";
import { GNB } from "components/GNB";
import { Logo } from "components/Logo";

export function Header() {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="section-header">
          <Link to="/">
            <Logo>판다마켓</Logo>
          </Link>
          <GNB />
        </div>
        <div>
          <Link to="/signin" className="btn-login">
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}
