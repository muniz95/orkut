import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes";

const App: React.FC = () => {
  const auth: boolean = useSelector((store: any) => store.auth);
  return (
    <div>
      <Routes auth={auth} />
    </div>
  );
};

// export default connect(mapStateToProps, null)(App)
export default App;
