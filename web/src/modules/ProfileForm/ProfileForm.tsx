import {Avatar, Box, Typography} from "@mui/material";

import {ChangeEvent, FC, useLayoutEffect, useMemo, useState} from "react";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import {toast} from "react-toastify";


import {MyInput} from "../../UIComponents/Input/MyInput";

import {UserProfileData} from "../../types/user.interface";

import {profileSchema} from "../../validations/profile.schema";

import {useAppDispatch} from "../../hooks/hooks";
import {fetchMe, uploadPhoto} from "../../redux/slices/auth/auth";

import {useStyles} from "./styles";
export const ProfileForm: FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [image, setImage] = useState("");
  const validationSchema = useMemo(() => {
    return profileSchema;
  }, []);

  const {
    register,
    reset,
  } = useForm<UserProfileData>(
    {
      mode: "onChange",
      resolver: yupResolver(validationSchema),
    },
  );

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) {
      return toast.error("please choose file");
    }
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const {payload} = await dispatch(uploadPhoto(formData));
    if(!payload){
      return toast.error("Something went wrong");
    }
    setImage(`${payload}?${Math.random()}`);
  };

  // useLayoutEffect(() => {
  //   const fetchData = async () => {
  //     const {payload} = await dispatch(fetchMe());
  //     if(!payload || typeof payload === "string"){
  //       return;
  //     }
  //     reset({
  //       username: payload?.username,
  //       firstName: payload?.firstName,
  //       lastName: payload?.lastName,
  //       email: payload?.email,
  //       phoneNumber: payload?.phoneNumber,
  //       birthday: payload?.birthday,
  //       registrationDate: payload?.registrationDate,
  //     });
  //     setImage(`https://practiflybucket.s3.eu-north-1.amazonaws.com/${payload?.id}`);
  //   };
  //   fetchData().catch((e) => {
  //     return e.message;
  //   });
  // }, []);

  return (
    <>
      <Box className={styles.rootForm}>
        <Box >

          <Box >
            <label htmlFor="filePhoto">
              <Avatar
                sx={{ borderRadius: 100, width: "100%", height: "100%" }}
                src={image}
              />
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              name="filePhoto"
              hidden
              id="filePhoto"
            />
          </Box>
        </Box>
        <Box className={styles.inputBlock}>
          <MyInput
            outsideLabel="Логін"
            name="username"
            disabled
            register={register}/>
          <MyInput
            outsideLabel="Повне імʼя"
            name="fullName"
            register={register}/>

          <MyInput
            outsideLabel="Email"
            name="email"
            register={register}/>
          <MyInput
            outsideLabel="Номер телефону"
            name="phoneNumber"
            register={register}/>
          <MyInput
            outsideLabel="Дата народження"
            register={register}
            name="birthday"
            type="date"/>

        </Box>
      </Box>

    </>
  );
};

