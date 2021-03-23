const Score = (props) => {
  return (
    <div className="row">
      <div className={props.className}>
        <h5>Score : {props.children}</h5>
      </div>
    </div>
  );
};
export default Score;
