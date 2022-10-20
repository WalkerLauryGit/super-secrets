import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/send'>Send</Link>
          </li>
          <li>
            <Link to='/open'>Open</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
