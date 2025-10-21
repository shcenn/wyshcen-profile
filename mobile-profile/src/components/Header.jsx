function Header({ onSectionChange }) {
  return (
    <header>
      <nav className="navigation-bar">
        <ul className="navigation-links">
          <li><a href="#home" onClick={() => onSectionChange("home")}>Home</a></li>
          <li><a href="#about" onClick={() => onSectionChange("about")}>About</a></li>
          <li><a href="#faq" onClick={() => onSectionChange("faq")}>FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
