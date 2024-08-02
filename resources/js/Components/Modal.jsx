import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, Fragment } from 'react';
export default function Modal({ children, show = false, maxWidth = '2xl', closeable = true, onClose = () => {} }) {
    let [isOpen, setIsOpen] = useState(true);


    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    return (
        <Transition show={show} >
            <Dialog
                static
                as="div"
                id="modal"
                className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
                onClose={() => null}
            >
                <div className="fixed inset-0 bg-dark-black/30 backdrop-blur-sm" aria-hidden="true" />
                <TransitionChild
                    // enter="ease-out duration-300"
                    // enterFrom="opacity-0"
                    // enterTo="opacity-100"
                    // leave="ease-in duration-200"
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel
                        className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}
                    >
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            onClick={close}
                        >
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                        {children}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
