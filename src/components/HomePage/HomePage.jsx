import styles from '../HomePage/HomePage.module.css';
function HomePage() {
  return (
    <div className={styles.homePageWrap}>
      <h2>"Phonebook"</h2>
      <h3>This is a "Phonebook" application, for note your's contacts</h3>
      <p>
        You can use the application in a few clicks 
      </p>
      <p>Sign in or Log in ...</p>
    </div>
  );
}
export default HomePage;
