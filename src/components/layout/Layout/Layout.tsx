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
  return <div className={styles.layout}>
    {children}
  </div>
}

export default Layout;
