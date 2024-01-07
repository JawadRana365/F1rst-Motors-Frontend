import React, { useState } from 'react'
import TextInput from '../../textInput/TextInput'
import Button from '../../button/Button'
import { toast } from 'react-toastify'
import CheckBoxInput from '../../checkBoxInput/CheckBoxInput'
import AnchorTag from '../../anchorTag/AnchorTag'
import H1 from '../../typography/H1'
import P from '../../typography/P'
import Image from '../../image/Image'
import axiosClient from '../../../utils/helpers/server'
import { useDispatch } from 'react-redux'
import { setAdmin } from '../../../redux/admin/adminSlice'
import { setToken } from '../../../redux/admin/tokenSlice'

export default function LoginForm() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleUserNameChange = (e) => {
        setUserName(e.currentTarget.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.currentTarget.value)
    }

    const handleSignInClicked = (e) => {
        if(!userName || userName === "" || userName === null || userName === undefined){
            toast.error("Please Enter User Name", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!password || password === "" || password === null || password === undefined){
            toast.error("Please Enter Password", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        axiosClient.post(
            "admin/jwt/login", 
            {
                email: userName,
                password: password
            }
        ).then(resp => {
            if(resp.data.response === 200){
                localStorage.setItem("loginToken", resp.data.data.token);
                dispatch(setAdmin(resp.data.data.user))
                dispatch(setToken(resp.data.data.token))
                window.location.href = "/";
            }else{
                toast.error("Invalid UserName or Password", {
                    position: toast.POSITION.TOP_CENTER,
                })
            }
        })
    }

    return (
        <>
            <section className="bg-white-50 dark:bg-slate-300">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <AnchorTag
                        href='/'
                        children= {
                            <Image
                                className="w-64 h-16 mr-2"
                                src="https://strapiadmin.f1rstmotors.com/uploads/firstmotor_logo_1b423799e1.png?w=828&q=75"
                                alt="logo"
                            />
                        }
                    />
                    <div className="w-full bg-primary-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <H1
                                children='Sign in to your account'
                            />
                            <div className="space-y-4 md:space-y-6">
                                <TextInput
                                    label = "Your Username"
                                    placeHolder = "Username"
                                    onInputChange={handleUserNameChange}
                                />
                                 <TextInput
                                    label = "Password"
                                    placeHolder = "********"
                                    inputType="password"
                                    onInputChange={handlePasswordChange}
                                />
                                <div className="flex items-center justify-between">
                                    <CheckBoxInput
                                        labelText = "Remember me"
                                    />
                                    <AnchorTag
                                        children='Forgot password?'
                                    />
                                </div>
                                <Button
                                    children="Sign in"
                                    onButtonClick={handleSignInClicked}
                                />
                                <P
                                    children={
                                        <>
                                            Don’t have an account yet? 
                                            <AnchorTag
                                                children='Sign up'
                                            />
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
