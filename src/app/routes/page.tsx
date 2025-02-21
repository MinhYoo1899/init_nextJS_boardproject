'use client'

import { useRouter } from "next/navigation";

export default function Routes(props: unknown) {
    console.log(props);
    const route = useRouter();
    return (
        <div>
            <h1> SUCESS ROUTES TEST !</h1>
            <button
                onClick={() => { route.back()}}
            >
                move to main page
            </button>
        </div>
    );
}