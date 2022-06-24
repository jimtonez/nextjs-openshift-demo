import Image from 'next/image'

function Topics () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 pb-10">
            <div className="col-span-1 bg-[#f5f5f5] rounded-md shadow-md">
                <div className="flex-col gap-2">
                    <div className="flex bg-white justify-center rounded-t-md pb-4">
                        <p className="mt-4 font-semibold">Next.js</p>
                    </div>
                    <div className="p-10 flex justify-center">
                        <Image className="" src="/next_2.png" alt="" width={140} height={140} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#f5f5f5] rounded-md shadow-md">
                <div className="flex-col gap-2">
                    <div className="flex bg-white justify-center rounded-t-md pb-4">
                        <p className="mt-4 font-semibold">NextAuth</p>
                    </div>
                    <div className="p-10 flex justify-center">
                        <Image className="" src="/nextauth.png" alt="" width={120} height={140} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#f5f5f5] rounded-md shadow-md">
                <div className="flex-col gap-2">
                    <div className="flex bg-white justify-center rounded-t-md pb-4">
                        <p className="mt-4 font-semibold">Docker</p>
                    </div>
                    <div className="p-10 flex justify-center">
                        <Image className="" src="/docker.webp" alt="" width={170} height={150} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#f5f5f5] rounded-md shadow-md">
                <div className="flex-col gap-2">
                    <div className="flex bg-white justify-center rounded-t-md pb-4">
                        <p className="mt-4 font-semibold">OpenShift</p>
                    </div>
                    <div className="p-10 flex justify-center">
                        <Image className="" src="/openshift.png" alt="" width={145} height={160} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topics