
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  categories: [
    {
      id: 'All Services',
      name: 'All Services',
 
      sections: [
        {
          id: 'Registration',
          name: 'Registration',
          items: [
            { name: 'GST Registration', href: '#' },
            { name: 'Professional Tax Registration', href: '#' },
            { name: 'N.G.O Registration', href: '#' },
            { name: 'Brand Registration', href: '#' },
            { name: 'Private limited Registration', href: '#' },
          
          ],
        },
        {
          id: 'Licences',
          name: 'Licences',
          items: [
            { name: 'Food Licence', href: '#' },
            { name: 'Trade Licence', href: '#' },
            { name: 'Police Licence', href: '#' },
            { name: 'Fire Licence', href: '#' },
            { name: 'Pollution Certification', href: '#' },
          ],
        },
        {
          id: 'other Services',
          name: 'Other Services',
          items: [
            { name: 'Pan Card', href: '#' },
            { name: 'DSC-Digital signature Cartificates', href: '#' },
            { name: 'GST Return Filling', href: '#' },
            { name: 'Income tax (ITR)', href: '#' },
            { name: 'TDS Return Filling', href: '#' },
            { name: 'TDS Refund', href: '#' },
            { name: 'DEEDS', href: '#' },
            { name: 'Providents Fdeedsund Refund', href: '#' },
            { name: 'Tan Card', href: '#' },
            { name: 'Accounting', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Join',
      name: 'Join',
     
      sections: [
        {
          id: 'Career',
          name: 'Career',
          items: [
            { name: 'Career Form', href: '#' },
     
          ],
        },
        {
          id: 'Partners',
          name: 'Partners',
          items: [
            { name: 'Partners Forms', href: '#' },
         
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
    {
        id: 'Contact',
        name: 'Contact',
       
        sections: [
          {
            id: 'Reach-us',
            name: 'Reach-us',
            items: [
              { name: 'Branches', href: '#' },
       
            ],
          },
          
        ],
      },
      {
        id: 'Feedbacck',
        name: 'Feedback',
       
        sections: [
          {
            id: 'Feedbacks',
            name: 'Feedbacks',
            items: [
              { name: 'Complains', href: '#' },
              { name: 'Suggestions', href: '#' },
       
            ],
          },
          
        ],
      },
  ],
  pages: [
   
 
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-violet-900 border-violet-900' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                      
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a href={item.href} className="-m-2 p-2 block text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a target="_blank" rel="noreferrer" href="http://manage.razaandassociates.com/"  className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
             
              </div>

             
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
      

        <nav aria-label="Top" className="w-full bg-slate-50 fixed mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Logo</span>
                  <img
                    className="h-8 w-auto"
                    src="/assets/img/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch lg:-pl-20 ">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-violet-900 text-violet-900'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                              
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden bg-violet-900 px-5 py-2 rounded-md lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a target="_blank" rel="noreferrer" href="http://manage.razaandassociates.com/" className="text-sm font-medium text-white hover:text-zinc-200">
                    Sign in
                  </a>
                  
                </div>

              


              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
