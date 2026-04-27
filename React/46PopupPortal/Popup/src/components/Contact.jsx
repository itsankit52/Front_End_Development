
import React, { useState } from 'react'
import Modal from './Modal'

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h1 className="text-xl">
        Connect with us on{' '}
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://github.com/itsankit52"
          target="_blank"
        >
          View My GitHub Profile
        </a>
      </h1>
      <button className='cursor-pointer outline-2 p-2 rounded-xl m-4 bg-blue-300 font-semibold' onClick={() => setIsOpen(true)}>Open Popup</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl font-bold text-red-400">Hiii</p>}
        footer={<div className='flex justify-end'><button onClick={() => setIsOpen(false)} className='font-bold bg-slate-300 px-4 py-2 rounded'>Ok</button></div>}
      >
        <p>
          Reusable Modal Component
        </p>
      </Modal>
    </>
  )
}
