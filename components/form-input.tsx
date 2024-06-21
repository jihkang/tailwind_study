interface FormInputProps {
    type: string;
    placeholder: string;
    required: boolean;
    errors: string[];
}


export default function FormInput({type, placeholder, required, errors}: FormInputProps)
 {
    return <div className={"flex flex-col gap-2"}>
            <input
                className="px-2
                        bg-transparent rounded-md h-10 w-full focus:outline-none
                        ring-1 focus:ring-2 ring-neutral-200 border-none
                        focus:ring-orange-500"
                type={type} placeholder={placeholder} required={required}
            />
            {
                errors.map((error) => (
                    <span className={"text-red-500"}>
                        Input Error
                    </span>)
                )
            }
        </div>
}