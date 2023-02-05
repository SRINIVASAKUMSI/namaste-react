import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const { status, statusText } = error;

  console.log(error.data);

  return (
    <div className="container">
      <h1>Ooooops!!!!</h1>
      <h2>Error Details</h2>
      <h3>Status Code : {status}</h3>
      <h3>Status Text : {statusText}</h3>
    </div>
  );
};

export default Error;
