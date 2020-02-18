import React, {Fragment} from "react";;

export default class Alert extends React.Component<{}, {}> {
    render() {
        return (
            <Fragment>
                <div
                    className="p-2 bg-red-800 bottom-0 items-center shadow leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert">
                        <span
                            className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">ERROR</span>
                    <span className="font-semibold mr-2 text-left flex-auto">An error occured on NL-AMS1-01</span>
                    <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path
                            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                    </svg>
                </div>
            </Fragment>
        )
    }
}