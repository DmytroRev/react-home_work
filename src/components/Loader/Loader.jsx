import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
  if (loading) {
    return (
      <div>
        <h1>Latest articles</h1>
        <ClipLoader
          color="#36D7B7"
          loading={loading}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return null;
};

export default Loader;
