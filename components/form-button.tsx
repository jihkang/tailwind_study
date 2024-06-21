interface FormButtonProps {
    disabled: boolean;
    loading: boolean;
    text: string;
}

export default function FormButton({text, loading, disabled}: FormButtonProps) {
    return <button
        className="primary-btn h-10 disabled:bg-neutral-500 disabled:text-neutral-400 disalbed:cursor-not-allowed"
        disabled={disabled}
    >
        {loading? "Loading..." : text}
    </button>
}