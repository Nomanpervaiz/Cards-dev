export default function Cards({ array }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {array.map((val,i) => {
                        return (
                            <div key={i} className="p-4 lg:w-1/3">
                                <div style={{backgroundColor:val.bgColor}} className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h1 style={{color:val.color}} className="title-font sm:text-2xl text-xl font-medium mb-3">
                                        {val.text}
                                    </h1>

                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>

    )

}