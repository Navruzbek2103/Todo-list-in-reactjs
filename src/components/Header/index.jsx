import "./style.scss"

export const Header = () => {
  return <>
    <header>
      <div className="container">
        <nav className="nav">
          <h2 className="nav-logo">Logo</h2>
          <ul className="nav__list">
            <li className="nav__list--item">
              <a href="/" className="nav__list--item-link">Home</a>
            </li>
            <li className="nav__list--item">
              <a href="/task" className="nav__list--item-link">Task</a>
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