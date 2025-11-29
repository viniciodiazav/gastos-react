import type { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
    return (
        <p className="w-full text-center text-red-600 font-bold">
            {children}
        </p>
    )
}
