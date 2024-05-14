const Error = ({ error }) => {
  if (error) {
    return (
      <div>
        <h1>Latest articles</h1>
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      </div>
    );
  }
  return null;
};

export default Error;
