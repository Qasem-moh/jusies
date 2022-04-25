import { useHistory } from "react-router-dom";
import SignIn from "../SignIn";

export function RouteMiddleware(props) {
  let loc = useHistory();

  let auth = new Requirement();
  console.log(auth.isLogin());
  if (auth.isLogin()) {
    return props.page;
  } else {
    loc.push("/SignIn");
    return <SignIn />;
  }
}

export function Requirement() {
  this.isLogin = function () {
    if (!localStorage.getItem("authUser")) {
      return false;
    } else {
      let auth = JSON.parse(localStorage.getItem("authUser"));
      if (auth.email && auth.password) {
        return true;
      } else {
        return false;
      }
    }
  };
}
