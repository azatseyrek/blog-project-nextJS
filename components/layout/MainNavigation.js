import Link from 'next/link';
import Logo from './Logo';

import classes from './mainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* Link normalde yazi disinda birsey kabul etmiyor child olarak. Ancak biz componenti link icerisinde kullanmak istiyoruz bunun icin a tagleri icerisine almamiz yeterli olacaktir */}
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
