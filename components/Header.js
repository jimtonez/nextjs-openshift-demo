import { HomeIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {useState, useEffect} from "react";
import DropDownMenu from "../components/DropDownMenu"

function Header () {

    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
          <div className="flex justify-between max-w-6xl mx-1 lg:mx-auto">
            <div onClick={() => router.push('/')} className="p-4 flex relative">
              <span className="emoji" role="img" aria-label="rocket">🚀</span>
              <p className="text-md font-semibold pl-3 cursor-default">nextjs-openshift-demo</p>
            </div>
            
            <div className="flex items-center justify-end space-x-2 md:space-x-4 pr-2">
              <HomeIcon onClick={() => router.push('/')} className="hidden md:navBtn" />
              {session ? (
                  <>
                  <DropDownMenu />
                  </>
              ): (
                  <button onClick={signIn} className="text-sm shadow-sm text-[#06c] hover:bg-[#004080] hover:text-white h-8 w-16 border border-[#06c] hover:border-[#004080] rounded-md">Sign In</button>
              )}
            </div>
          </div>
        </div>
    )
}

export default Header