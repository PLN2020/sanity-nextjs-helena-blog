import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

export default function StudioNavbar (props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
                    Back to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}