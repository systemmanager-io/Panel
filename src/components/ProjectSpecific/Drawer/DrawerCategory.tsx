import React from "react"

export default function DrawerCategory(props: { title: string, children: any }) {
    return (
        <div className={"border-gray-500"}>
            <p className={"m-1 px-4 py-1 text-sm text-gray-700"}>{props.title}</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}
