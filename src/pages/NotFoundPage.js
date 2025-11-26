import { useRouteError } from "react-router";

const NotFoundPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>
        {err.status} {err.statusText}
      </h2>
      <h4>{err.data}</h4>
    </div>
  );
};

export default NotFoundPage;
