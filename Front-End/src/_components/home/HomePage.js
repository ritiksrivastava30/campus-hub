import React from "react";
import { Button } from "../_utility_components/Button";
import {
  LOGIN_AS_CANTEEN,
  LOGIN_AS_STUDENT,
  LOGIN_AS_WARDEN,
  LOGIN_AS_GUARD
} from "../_constants/login_constants";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/login/students">
        <Button text={LOGIN_AS_STUDENT} />
      </Link>

      <Link to="/login/wardens">
        <Button text={LOGIN_AS_WARDEN} />
      </Link>

      <Link to="/login/canteens">
        <Button text={LOGIN_AS_CANTEEN} />
      </Link>

      <Link to="/login/guards">
        <Button text={LOGIN_AS_GUARD} />
      </Link>

    </div>
  );
};

export default HomePage;
