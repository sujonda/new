/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';


const DepositeModal = ({ isOpen, closeModal, item, handleSummit, loader }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-bold text-center leading-6 text-gray-900 mb-6"
                                >
                                    {
                                        item
                                    }
                                </Dialog.Title>

                                <form action="" onSubmit={handleSummit}>
                                    <div className="flex flex-col gap-3">
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                            name='tranId'
                                            id='tran. Id'
                                            type='text'
                                            placeholder='Transection Id'
                                            required
                                        />
                                        <select
                                            required
                                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                            name='medium'
                                        >
                                            <option value="nagad">Nagad</option>
                                            <option value="binance">Binance</option>
                                            <option value="payeer">Payeer</option>
                                        </select>
                                        <button
                                            type="submit"
                                            className="bg-rose-500 w-full rounded-md py-3 text-white"
                                        >
                                            {loader ? (
                                                <TbFidgetSpinner className="animate-spin m-auto" />
                                            ) : (
                                                "Continue"
                                            )}
                                        </button>
                                    </div>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default DepositeModal;
