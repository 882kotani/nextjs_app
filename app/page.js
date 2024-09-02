import styles from "./page.module.css";
import Grid from "./grid";
import Logo from "./logo";
import Header from "./header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Logo></Logo>
      <Grid></Grid>
    </main>
  );
}
