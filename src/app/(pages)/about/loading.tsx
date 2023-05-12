import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <>
      <div className="animate-pulse">content loading...</div>
    </>
  );
};

export default loading;

//Loading staate for server components
