const SuccessAlert: React.FC = () => {
    return (
        <div className="z-100 alert alert-success absolute left-0 top-0 mt-2 ml-2 bg-green-500 text-white">
            <div className="flex-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                </svg>
                <label>Transaction Added Successfully</label>
            </div>
        </div>
    )
}

export default SuccessAlert
