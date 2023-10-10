import React from "react";
import UserInput from "../../../component/common/UserInput";
import DataInput from "../../../component/common/DataInput";
import ErrorMessage from "../../../component/common/ErrorMessage";
import uploadfile from "../../../img/upload-file.svg";
import uploadfileWebp from "../../../img/upload-file.webp";
import resetClass from "./signupup";
import "./signupup";

import {
  ProfileContainer,
  ProfileForm,
  Title,
  Subtitle,
  ProfileButton,
  ImgLabel,
  ImgInput,
  Img,
} from "./profileSetting.style";

const ProfileSettingUI = ({
  profileImage,
  userName,
  userNameErrorMsg,
  nickName,
  nickNameErrorMsg,
  intro,
  handleImageChange,
  handleNickNameChange,
  handleNickNameBlur,
  handleUserNameChange,
  handleIntroChange,
  isFormValid,
  handleSubmit,
  resolveWebp,
}) => {
  function resetClass(element, classname){
    element.classList.remove(classname);
  }
  document.getElementsByClassName("show-signup")[0].addEventListener("click",function(){
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signin");
    form.classList.add("signup");
    document.getElementById("submit-btn").innerText = "Sign Up";
  });
  document.getElementsByClassName("show-signin")[0].addEventListener("click",function(){
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    form.classList.add("signin");
    document.getElementById("submit-btn").innerText = "Sign In";
  });

  return (
    <ProfileContainer>
      <ProfileForm>
        <Title>프로필 설정</Title>
        <Subtitle>나중에 언제든지 변경할 수 있습니다.</Subtitle>
        <ImgLabel htmlFor="file-input">
          <Img className="defaultlion" src={profileImage} alt="기본 이미지" />
          <Img className="uploadbtn" src={uploadfile} alt="업로드 버튼" />
        </ImgLabel>
        <ImgInput
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleImageChange}
          aria-label = "프로필 사진 업로드"
        ></ImgInput>

        <UserInput inputId="registernickname" label="사용자 이름">
          <DataInput
            type="text"
            id="registernickname"
            placeholder="2~10자 이내여야 합니다."
            value={userName}
            onChange={handleUserNameChange}
            aria-label = "사용자 이름 입력칸"
          ></DataInput>
          {userNameErrorMsg && <ErrorMessage>{userNameErrorMsg}</ErrorMessage>}
        </UserInput>

        <UserInput inputId="registerid" label="계정 ID">
          <DataInput
            type="text"
            id="registerid"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            value={nickName}
            onChange={handleNickNameChange}
            onBlur={handleNickNameBlur}
            aria-label = "계정 아이디 입력칸"
          ></DataInput>
          {nickNameErrorMsg && <ErrorMessage>{nickNameErrorMsg}</ErrorMessage>}
        </UserInput>

        <UserInput inputId="registerintro" label="소개">
          <DataInput
            type="text"
            id="registerintro"
            placeholder="자신을 소개하는 말을 적어주세요!"
            value={intro}
            onChange={handleIntroChange}
            aria-label = "소개 입력칸"
          ></DataInput>
        </UserInput>

        <ProfileButton
          className="large"
          disabled={
            nickNameErrorMsg === "이미 가입된 계정ID 입니다."
          }
          onClick={handleSubmit}
          aria-label = "시작하기 버튼"
        >
          시작하기
        </ProfileButton>
      </ProfileForm>

    </ProfileContainer>
  );
};

export default ProfileSettingUI;
