function HomeSection() {
    return (
        <section className="bg-blue-50 h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 sm:flex-row items-center justify-between gap-10">
                <div className="mask-b-from-20% mask-b-to-80%  block lg:hidden md:hidden">
                    <div className="w-full max-w-lg md:h-86 bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 text-xl font-semibold">
                        <img className="rounded" src="/images/heroProfile.png" alt="" />
                    </div>
                </div>
                <div className="md:w-1/2 md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Hello <br className="hidden md:block" /> I'm Ichwal
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Junior Frontend Developer and junior network administrator with a passion for creating useful and secure systems.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                        Contact Me
                    </button>
                </div>
                <div className="xl:mask-l-from-40% mask-l-to-100% bg-[url(/img/mountains.jpg)] rounded hidden md:block ">
                    <div className="w-full max-w-lg md:bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 text-xl font-semibold">
                        <img className="rounded" src="/images/heroProfile.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeSection
