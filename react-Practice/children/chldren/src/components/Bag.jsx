function Bag(props) {
  const bag = {
    padding: '20px',
    background: '#000',
    margin: '20px 20px',
    color: 'tomato',
    border: '2px solid green',
    fontSize: '40px',
  };
  return <div style={bag}>{props.children}</div>;
}
export default Bag;
