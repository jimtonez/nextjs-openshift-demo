import Header from '../components/Header'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Account() {

    const { data: session } = useSession();

    return (
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        <Head>
          <title>Next.js Openshift Demo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4">
          <div className="md:col-span-2 justify-center">
              <h1 className="text-3xl md:text-5xl mt-5 md:mt-10 ml-2 md:ml-0 font-semibold">Account</h1>
          </div>
          <div className='col-span-2 lg:col-span-4 bg-[#f5f5f5] rounded-md shadow-md'>
            <div className="flex items-center justify-between p-10">
                <img className="w-14 h-14 rounded-full" src={session?.user?.image} alt="" />
                <div className="flex-1 mx-4">
                    <h2 className="font-bold">{session?.user?.username}</h2>
                    <h3 className="text-sm text-gray-400">You are signed in!</h3>
                </div>
            </div>
            </div>
            <div className='col-span-2 lg:col-span-4 bg-[#f5f5f5] rounded-md shadow-md'>
              <div className='flex items-center justify-between p-10'>
                <div className='flex-1 space-y-4'>
                  <h2 className='font-bold'>Click this button to go to the conclusion page:</h2>
                  <button className="text-sm shadow-sm text-[#06c] hover:bg-[#004080] hover:text-white h-8 w-16 border border-[#06c] hover:border-[#004080] rounded-md">Done</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }