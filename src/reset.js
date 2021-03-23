const Reset = (props) => {
  return (
    <div className="text-center mt-1">
      <button onClick={(e) => props.newgame(e)} className="btn btn-primary">
        {props.children}
      </button>
    </div>
  );
};

export default Reset;
