import { TbMessageCircle } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import ContactForm from './ContactForm'
const QuickChat = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="fixed z-[100] bottom-6 left-4">
      <div
        className={`p-3 pointer-events-none bg-white border scale-75 opacity-0 transition-all duration-300 border-[#ccc] rounded shadow-2xl ${
          showForm && 'scale-100 pointer-events-auto opacity-100'
        }`}
      >
        <ContactForm sm={true} />
      </div>
      <div
        onClick={() => setShowForm(!showForm)}
        className="p-4 mt-3 text-xl text-white bg-red-700 rounded-full cursor-pointer max-w-max"
      >
        {showForm ? <AiOutlineClose /> : <TbMessageCircle />}
      </div>
    </div>
  )
}

export default QuickChat
