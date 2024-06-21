import Link from "next/link";
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/16/solid";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";

export default function createAccountPage() {
    return (
        <div className={"flex flex-col gap-10 px-5 py-8"}>
            <div className={"flex flex-col gap-2 *:font-medium"}>
                <h1 className={"text-2xl"}>
                    안녕하세요!
                </h1>
                <h2 className={"text-xl"}>
                    Fill in the form below to login
                </h2>
            </div>
            <form className={"flex flex-col gap-3"}>
                <FormInput type={"text"} placeholder={"Username"} required={true} errors={[]}/>
                <FormInput type={"email"} placeholder={"Email"} required={true} errors={[]}/>
                <FormInput type={"password"} placeholder={"password"} required={true} errors={[]}/>
                <FormInput type={"password"} placeholder={"Confirm password"} required={true} errors={[]}/>
                <FormButton text={"Create Account"} loading={false} disabled={false} />
            </form>
            <SocialLogin href={"sns"} linkName={"Github"}/>
        </div>


    );
}