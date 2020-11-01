const styles = {
  text: {
    textAlign: "center",
  },
  bbqImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};

function App() {
  return (
    <div>
      <h1 style={styles.text}>Second Best Burger in Town</h1>
      <img
        style={styles.bbqImage}
        src="https://thehuntr.com/wp-content/uploads/2017/11/BBQ-Box-Dubai-2-663x440.jpg"
      />
    </div>
  );
}

export default App;
