import React from 'react'

const Content = () => {
    return (
        <div className=''>
            <main className="flex-1 p-5 mt-16 bg-[#172b4d] text-white flex flex-col justify-center items-center ">
                <div className="z-50 ml-56  md:block hidden absolute top-9">
                    <button className='bg-[#5243aa] hover:bg-[#624fc9] rounded-lg px-4 py-1.5 gap-1 flex text-sm'>
                        🔥Get more power from Restream!
                        <span className='underline hover:no-underline font-semibold'>Upgrade!</span>
                    </button>
                </div>
                <div className="flex justify-between items-center w mb-7 w-full md:ml-56 md:w-[784px]">
                    <h2 className="text-2xl  font-[poppins] text-gray-200">Streams</h2>
                    <button className="flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.99996 1.16666V12.8333M1.16663 6.99999H12.8333" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span>Create New</span>
                    </button>
                </div>

                <div className="space-y-4 md:ml-56">
                    <div className=" md:w-[784px]  ">
                        <div className="md:p-2 p-4 bg-[#2b3d5c] rounded-lg flex md:flex-row flex-col gap-2.5 ">
                            <div className="">
                                <img className='w-full' src="https://app.restream.io/static/media/rtmp-instant-thumbnail.0dda51bde7ea852684196e39e9fadabe.svg" alt="image" />
                            </div>
                            <div className="">
                                <div className="flex items-center gap-1">
                                    <svg
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_23_155937)"><path d="M1.33334 1.3335H4V4.00016H1.33334V1.3335Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.66667 1.3335H9.33334V4.00016H6.66667V1.3335Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 1.3335H14.6667V4.00016H12V1.3335Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33334 6.66683H4V9.3335H1.33334V6.66683Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.66667 6.66683H9.33334V9.3335H6.66667V6.66683Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 6.66683H14.6667V9.3335H12V6.66683Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33334 12.0002H4V14.6668H1.33334V12.0002Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.66667 12.0002H9.33334V14.6668H6.66667V12.0002Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.0002H14.6667V14.6668H12V12.0002Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_23_155937"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
                                    </svg>
                                    <span className='text-xs text-gray-200'>RTMP</span>
                                </div>
                                <p className="text-lg w-full  font-semibold overflow-hidden text-ellipsis">Stream via RTMP (OBS, Vmix, Zoom) with Restream</p>
                            
                                <button className='bg-[#42526e] hover:bg-slate-500 font-semibold h-fit py-2 text-center md:py-1.5 px-2 rounded-lg  flex items-center gap-2 text-sm w-full justify-center md:mt-[22px] md:w-fit md:ml-[450px] mt-5 '><span>RTMP Setup</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginleft: 8 + "px" }}><path d="M6 12L10 8L6 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[784px]">
                        <div className="p-2 bg-[#2b3d5c] rounded-lg flex md:flex-row flex-col gap-2.5 ">
                            <div className="bg-[url('https://app.restream.io/static/media/scene-preview-bg@610w.73b6fbf23faf2f83c5a3.jpg')] bg-cover md:w-[180px] w-full md:h-[100px] h-[189px] rounded-lg flex  items-center justify-center gap-1.5">

                                <div className="border-[0.4px] backdrop-blur-md rounded-lg border-gray-500 px-7 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="SceneLobbyPreviewThumbnail-module__mediaIcon___HIJoK" aria-hidden="true"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5m10-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0" opacity="0.75"></path></svg>
                                </div>
                                <div className="border-[0.4px] backdrop-blur-md rounded-lg border-gray-500 px-7 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="SceneLobbyPreviewThumbnail-module__mediaIcon___HIJoK" aria-hidden="true"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5m10-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0" opacity="0.75"></path></svg>
                                </div>
                            </div>
                            <div className="">
                                <div className="md:w-[580px] flex justify-between">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6667 5.95392C14.6667 5.55004 14.6667 5.34811 14.5868 5.2546C14.5175 5.17346 14.4136 5.1304 14.3072 5.13877C14.1846 5.14842 14.0418 5.29121 13.7562 5.5768L11.3333 7.99967L13.7562 10.4226C14.0418 10.7081 14.1846 10.8509 14.3072 10.8606C14.4136 10.8689 14.5175 10.8259 14.5868 10.7448C14.6667 10.6512 14.6667 10.4493 14.6667 10.0454V5.95392Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33334 6.53301C1.33334 5.4129 1.33334 4.85285 1.55132 4.42503C1.74307 4.0487 2.04903 3.74274 2.42535 3.55099C2.85318 3.33301 3.41323 3.33301 4.53334 3.33301H8.13334C9.25344 3.33301 9.81349 3.33301 10.2413 3.55099C10.6176 3.74274 10.9236 4.0487 11.1153 4.42503C11.3333 4.85285 11.3333 5.4129 11.3333 6.53301V9.46634C11.3333 10.5864 11.3333 11.1465 11.1153 11.5743C10.9236 11.9506 10.6176 12.2566 10.2413 12.4484C9.81349 12.6663 9.25344 12.6663 8.13334 12.6663H4.53334C3.41323 12.6663 2.85318 12.6663 2.42535 12.4484C2.04903 12.2566 1.74307 11.9506 1.55132 11.5743C1.33334 11.1465 1.33334 10.5864 1.33334 9.46634V6.53301Z" stroke="#97A0AF" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <span className='text-xs text-gray-200'>Studio</span>
                                    </div>
                                    <div className="flex w-16 justify-between">
                                        <button className='hover:bg-slate-500 p-0.5 rounded-md'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#clip0_217_3608)"><path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88561 10.781C9.38551 10.281 8.70723 10 7.99999 10H3.33332C2.62608 10 1.9478 10.281 1.44771 10.781C0.947608 11.2811 0.666656 11.9594 0.666656 12.6667V14M13.3333 5.33333V9.33333M15.3333 7.33333H11.3333M8.33332 4.66667C8.33332 6.13943 7.13942 7.33333 5.66666 7.33333C4.1939 7.33333 2.99999 6.13943 2.99999 4.66667C2.99999 3.19391 4.1939 2 5.66666 2C7.13942 2 8.33332 3.19391 8.33332 4.66667Z" stroke="#BAC1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_217_3608"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
                                            </svg>
                                        </button>
                                        <button className='hover:bg-slate-500 p-0.5 rounded-md'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10.6667 12L14.6667 8L10.6667 4M5.33334 4L1.33334 8L5.33334 12" stroke="#BAC1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className='hover:bg-slate-500 p-0.5 rounded-md'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99998 8.66699C8.36817 8.66699 8.66665 8.36852 8.66665 8.00033C8.66665 7.63214 8.36817 7.33366 7.99998 7.33366C7.63179 7.33366 7.33331 7.63214 7.33331 8.00033C7.33331 8.36852 7.63179 8.66699 7.99998 8.66699Z" fill="#FAFBFC"></path><path d="M7.99998 4.00033C8.36817 4.00033 8.66665 3.70185 8.66665 3.33366C8.66665 2.96547 8.36817 2.66699 7.99998 2.66699C7.63179 2.66699 7.33331 2.96547 7.33331 3.33366C7.33331 3.70185 7.63179 4.00033 7.99998 4.00033Z" fill="#FAFBFC"></path><path d="M7.99998 13.3337C8.36817 13.3337 8.66665 13.0352 8.66665 12.667C8.66665 12.2988 8.36817 12.0003 7.99998 12.0003C7.63179 12.0003 7.33331 12.2988 7.33331 12.667C7.33331 13.0352 7.63179 13.3337 7.99998 13.3337Z" fill="#FAFBFC"></path><path d="M7.99998 8.66699C8.36817 8.66699 8.66665 8.36852 8.66665 8.00033C8.66665 7.63214 8.36817 7.33366 7.99998 7.33366C7.63179 7.33366 7.33331 7.63214 7.33331 8.00033C7.33331 8.36852 7.63179 8.66699 7.99998 8.66699Z" stroke="#FAFBFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99998 4.00033C8.36817 4.00033 8.66665 3.70185 8.66665 3.33366C8.66665 2.96547 8.36817 2.66699 7.99998 2.66699C7.63179 2.66699 7.33331 2.96547 7.33331 3.33366C7.33331 3.70185 7.63179 4.00033 7.99998 4.00033Z" stroke="#FAFBFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99998 13.3337C8.36817 13.3337 8.66665 13.0352 8.66665 12.667C8.66665 12.2988 8.36817 12.0003 7.99998 12.0003C7.63179 12.0003 7.33331 12.2988 7.33331 12.667C7.33331 13.0352 7.63179 13.3337 7.99998 13.3337Z" stroke="#FAFBFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold">Go live from your browser with Restream Studio</h3>
                            <button className='bg-[#42526e] hover:bg-slate-500 font-semibold h-fit py-1.5 px-2 rounded-lg justify-center flex items-center gap-2 text-sm md:mt-[22px] md:w-fit md:ml-[450px]'>Enter Studio
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginleft: 8 + "px" }}><path d="M6 12L10 8L6 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            </div>
                        </div>
                    </div>

                </div>


            </main>
        </div>
    )
}

export default Content
