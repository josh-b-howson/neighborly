import Link from 'next/link';
import Button from '../../Button/Button';
import styles from './Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode,
}

/**
 * Layout wrapper for all pages across the site.
 */
const Layout = ({
  children,
}: LayoutProps) => {
  return <div
    className={styles.layout}>
    <header
      className={styles.header}>
      <Link
        href="/"
        className="brand">
        <span
          className="logo">
          🏡
        </span>
        Neighborly
      </Link>
      <nav>
        <Link
          href="/sign-in">
          Sign in
        </Link>
        <Button
          variant="outline"
          color="arbor">
          Review a neighbor
        </Button>
      </nav>
    </header>
    <main
      className={styles.main}>
      {children}
    </main>
    <footer
      className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()}
    </footer>
  </div>
}

export default Layout;
