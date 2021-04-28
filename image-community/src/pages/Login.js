import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    // setCookie("user_id", "perl", 3);
    // setCookie("user_pwd", "cat", 3);
    dispatch(userActions.loginAction({ user_name: "perl" }));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label={"아이디"}
            placeholder={"아이디를 입력해주세요"}
            _onChange={() => {
              console.log("아이디 입력했어");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요"}
            _onChange={() => {
              console.log("비밀번호 입력했어");
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인해따!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
