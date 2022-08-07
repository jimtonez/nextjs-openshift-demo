import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import SignInLogo from "../../components/SignInLogo";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub, FaStrava } from "react-icons/fa";

export default function SignIn({ providers }) {
    return (
      <>
      <Head>
        <title>AtriumGrid</title>
        <link rel="icon" type="image/png" sizes="64x64" href="/64x64.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
        <div class="2xl:container h-screen m-auto">
        <div hidden class="relative w-6/12 lg:block">
          <div class="fixed ml-auto lg:w-6/12">
            <div className="flex ml-40 mt-40 items-center">
              <SignInLogo />
            </div>
          </div>
        </div>
        {/* <div hidden role="hidden" class="fixed inset-0 w-6/12 ml-auto lg:block"></div> */}
        <div class="relative ml-auto lg:pr-12 lg:w-6/12 bg-white bg-opacity-90 dark:bg-[#101111] dark:bg-opacity-90">
          <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <div class="space-y-4">
                <p class="font-medium text-lg text-gray-600 dark:text-white">Welcome to AtriumGrid!</p>
            </div>
            <div role="hidden" class="mt-12 border-t">
                <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 dark:text-white bg-white dark:bg-[#101111]">Sign in with</span>
            </div>
            <div class="mt-12 grid gap-6 sm:grid-cols-2">
              {Object.values(providers).map((provider) => (
                <button className="py-3 px-6 bg-white dark:bg-[#101111] border border-blue-400 shadow-sm rounded-lg hover:text-white dark:hover:text-[#101111] hover:bg-blue-400 dark:hover:bg-blue-400" onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
                  <div class="flex gap-4 items-center justify-center">
                    <FcGoogle className="scale-150"/>
                    <span class="block w-max font-medium tracking-wide text-sm">{provider.name}</span>
                  </div>
                </button>
              ))}
              <button class="py-3 px-6 rounded-lg shadow-sm border border-black dark:border-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:bg-gray-600 focus:bg-gray-700">
                <div class="flex gap-4 items-center justify-center">
                  <FaApple className="scale-150"/>
                  <span class="block w-max font-medium tracking-wide text-sm">Apple</span>
                </div>
              </button>
              <button class="py-3 px-6 rounded-lg shadow-sm border border-black dark:border-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:bg-gray-600 focus:bg-gray-700">
                <div class="flex gap-4 items-center justify-center">
                  <FaGithub className="scale-150"/>
                  <span class="block w-max font-medium tracking-wide text-sm">GitHub</span>
                </div>
              </button>
              <button class="py-3 px-6 rounded-lg shadow-sm border border-[#ff9900] transition hover:bg-[#ff9900] hover:text-white active:bg-gray-600 focus:bg-gray-700">
                <div class="flex gap-4 items-center justify-center">
                  <FaStrava className="scale-150"/>
                  <span class="block w-max font-medium tracking-wide text-sm">Strava</span>
                </div>
              </button>
            </div>

            <div role="hidden" class="mt-12 border-t">
                <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 dark:text-white bg-white dark:bg-[#101111]">Or</span>
            </div>

            <form action="" class="space-y-6 py-6">
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  class="w-full py-3 px-6 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div class="flex flex-col items-end">
                <input 
                  type="password" 
                  placeholder="Password"
                  class="w-full py-3 px-6 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <button type="reset" class="w-max p-3 -mr-3">
                  <span class="text-sm tracking-wide text-blue-600">Reset password?</span>
                </button>
              </div>
              <div>
                <button class="w-full px-6 py-3 rounded-lg bg-[#32cd32] transition hover:opacity-80 focus:bg-sky-600 active:bg-sky-800">
                  <span class="font-semibold text-white text-lg">Sign in</span>
                </button>
              </div>
            </form>
            <div class="border-t pt-12">
              <div class="space-y-2 text-center">
                <span class="block text-sm tracking-wide text-gray-500">By signing up for AtriumGrid, you agree to the Terms of Service. View our Privacy Policy.</span>
              </div>
            </div>
          </div>
         </div>
      </div>
      </>
    )
  }
  
  export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }