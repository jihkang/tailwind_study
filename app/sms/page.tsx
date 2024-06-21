import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl"> verify with SMS.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput type="number" placeholder="phonenumber" required errors={[]} />
                <FormInput type="number" placeholder="verify code" required errors={[]} />
                <FormButton loading={false} disabled={false} text="Verify" />
            </form>
        </div>
    );
}