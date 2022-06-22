/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    UserCircleIcon,
    CogIcon,
    LogoutIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu() {

    const { data: session } = useSession();

  return (
    <Popover className="z-0 relative">
      {({ open }) => (
        <>
          <Popover.Button className="outline-none">
            <img src={session.user.image} alt="" className="mt-1.5 h-10 rounded-full cursor-pointer" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 transform -left-9 -translate-x-3/4 w-screen max-w-xs sm:px-0">
              <div className="rounded-br-lg rounded-bl-lg shadow-sm overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <ul role="list" className="mt-1 space-y-6">
                        <li key="Account" className="flow-root">
                        <a
                            href="#"
                            className="-m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-black dark:text-white hover:bg-gray-50 dark:hover:bg-opacity-5 transition ease-in-out duration-150"
                        >
                            <UserCircleIcon className='flex-shrink-0 h-6 w-6 text-black dark:text-[#515151]' aria-hidden="true" />
                            <span className='text-sm font-normal'>Account</span>
                        </a>
                        </li>
                        <li key="Settings" className="flow-root">
                        <a
                            href="#"
                            className="-m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-black dark:text-white hover:bg-gray-50 dark:hover:bg-opacity-5 transition ease-in-out duration-150"
                        >
                            <CogIcon className='flex-shrink-0 h-6 w-6 text-black dark:text-[#515151]' aria-hidden="true" />
                            <span className='text-sm font-normal'>Settings</span>
                        </a>
                        </li>
                        <li key="Signout" onClick={signOut} className="flow-root">
                        <a
                            href="#"
                            className="-m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-black dark:text-white hover:bg-[#ff0000] hover:text-white dark:hover:text-[#101111] transition ease-in-out duration-150"
                        >
                            <LogoutIcon className='flex-shrink-0 h-6 w-6 text-black dark:text-[#515151]' aria-hidden="true" />
                            <span className='text-sm font-normal'>Sign Out</span>
                        </a>
                        </li>
                    </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}