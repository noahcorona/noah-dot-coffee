import '../../style/App.css';

const Error404 = () => {
  return (
    <div className="Section">
      <div className="decorated bottom-spaced">
        <span><h1>Error 404</h1></span>
      </div>
      <h2>Sorry :(</h2>
      <text>The page {'you\'re'} looking for {'can\'t'} be found</text>
    </div>
  );
};

export default Error404;
