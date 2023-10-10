import React, { Fragment, useContext, useState } from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';
import myContext from '../../context/myContext';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;
  const [open, setOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "admin@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over Rs 300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bay</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'admin@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://scontent.fskz1-1.fna.fbcdn.net/v/t39.30808-6/376885622_320157050562546_7292902071662575846_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG-_ZYYTdYAHQS-0yws73_tm-yDvpwVaGWb7IO-nBVoZULCEnND8OTKE8jgTFJEdzuq00qIl4q58bN8nucO5I1s&_nc_ohc=yFVdSBe20x0AX_WAqsZ&_nc_ht=scontent.fskz1-1.fna&oh=00_AfA6b9iadGsrdk7fCFEPpr7lQXLdfE9MinQnhk5XWff-GQ&oe=652B3043"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar