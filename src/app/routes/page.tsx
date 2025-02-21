'use client'

import { useRouter } from "next/navigation";
import InputTest from '@/app/pages/components/inputTest';

export default function Routes(props: unknown) {
    console.log(props);
    const route = useRouter();
    return (
        <div>
            <h1> SUCESS ROUTES TEST !</h1>
            <InputTest />
            <div>
                <button
                    onClick={() => { route.back() }}
                >
                    move to main Page
                </button>
            </div>
        </div>
    );
}