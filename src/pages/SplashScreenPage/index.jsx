import React from "react";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import "./SplashScreenPage.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserName, setUser } from "../../redux/features/User/UserSlice";

export default function SplashScreenPage() {
  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);
  const dispatch = useDispatch();

  return (
    <>
      <AnimatedFadeInPage>
        <main>{userName}</main>
        <main>{userEmail}</main>
        <button onClick={() => dispatch(deleteUserName())}>deletes</button>
        <button
          onClick={() =>
            dispatch(setUser({ name: "Maggi", userEmail: "iii@gmail.com" }))
          }
        >
          updateUserProfile
        </button>
      </AnimatedFadeInPage>
    </>
  );
}
