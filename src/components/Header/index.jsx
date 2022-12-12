import "./style.scss"

export const Header = () => {
  return <>
    <header>
      <div className="container">
        <nav className="nav">
          <h2 className="nav-logo">Logo</h2>
          <ul className="nav__list">
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link1</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link2</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link3</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link4</a>
            </li>
            <li className="nav__list--item">
              <a href="#" className="nav__list--item-link">Link5</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
}