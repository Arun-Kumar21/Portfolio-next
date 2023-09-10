
export default function Footer() {

    return (
        <>
            <div className="bg-black text-white selection:bg-[#F81CE5]">
                <div className="flex justify-center items-center h-[10v] p-5">
                    <h1 className="text-xl heroTxt">Made with ❤️ by Arun Kumar</h1>
                </div>

                <div className="pb-3">
                    {/* copyright sectiond */}
                    <div className="flex justify-center items-center">
                        <p className="text-sm">
                            © 2023 Arun Kumar. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}