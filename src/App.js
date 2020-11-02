// import items from "./items.js";

const styles = {
  text: {
    textAlign: "center",
  },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  bbqImage: {
    width: "200px",
    height: "200px",
  },
  list: {
    alignItems: "centr",
    justfycontent: "center",
    display: "flex",
  },
  item: {
    margin: "20px",
  },
};

function App() {
  const itemList = items.map((item) => (
    <div style={styles.item}>
      <img style={styles.itemImage} src={item.image} alt={item.name} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 style={styles.text}>Second Best Burger in Town</h1>
        <img
          style={styles.shopImage}
          src="https://thehuntr.com/wp-content/uploads/2017/11/BBQ-Box-Dubai-2-663x440.jpg"
          alt="BBQ SHOP"
        />
      </div>
      <div style={styles.list}>{itemList}</div>
    </div>
  );
}

export default App;
