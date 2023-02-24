import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { GrClose } from 'react-icons/gr'

const ContactForm = ({ sm }) => {
  const initialFormState = {
    user_name: '',
    user_email: '',
    message: '',
  }
  const form = useRef()
  const [formState, setFormState] = useState({ ...initialFormState })
  const [showMessage, setShowMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    if (
      testEmail(formState?.user_email) &&
      formState?.user_name?.length &&
      formState?.message?.length
    ) {
      emailjs
        .sendForm(
          'service_6yy2k95',
          'template_ab632ntd',
          form.current,
          'ciB025bSOF1JPGH05',
        )
        .then(
          (result) => {
            setFormState({ ...initialFormState })
            setShowMessage(true)
          },
          (error) => {
            alert(error.text)
          },
        )
    }
  }
  const updateFormState = (property, value) => {
    const updatedForm = { ...formState, [property]: value }
    setFormState({ ...updatedForm })
  }

  const testEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  return (
    <>
      <form
        className="flex flex-col flex-1 w-[90vw] md:w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <label
          className={`text-blue-900 transition duration-300 ${
            sm && 'text-sm'
          } ${!formState?.user_name && '!text-red-700'}`}
        >
          Name
        </label>
        <input
          onChange={(e) => updateFormState('user_name', e.target.value)}
          className={`input  ${sm && 'p-1 text-sm mb-2'} ${
            !formState?.user_name && 'border-red-700'
          }`}
          type="text"
          value={formState.user_name}
          required
          placeholder="John Doe"
          name="user_name"
        />
        <label
          className={`text-blue-900 transition duration-300 ${
            sm && 'text-sm'
          } ${!testEmail(formState?.user_email) && '!text-red-700'}`}
        >
          Email
        </label>
        <input
          onChange={(e) => updateFormState('user_email', e.target.value)}
          placeholder="example@gmail.com"
          className={`input ${sm && 'p-1 text-sm mb-2'} ${
            !testEmail(formState?.user_email) && 'border-red-700'
          }`}
          type="email"
          value={formState.user_email}
          required
          name="user_email"
        />
        <label
          className={`text-blue-900 transition duration-300 ${
            sm && 'text-sm'
          } ${!formState?.message && '!text-red-700'}`}
        >
          Message
        </label>
        <textarea
          placeholder="Hello..."
          onChange={(e) => updateFormState('message', e.target.value)}
          required
          value={formState.message}
          className={`resize-none  ${
            sm && 'p-1 text-sm mb-2 !h-[80px]'
          } input h-[120px] ${!formState.message && 'border-red-700'}`}
          name="message"
        />
        <input
          className={`${
            sm && 'py-2 text-base'
          } transition py-3 duration-300 rounded cursor-pointer font-bold text-white bg-red-700 ${
            testEmail(formState?.user_email) &&
            formState?.user_name?.length &&
            formState?.message?.length &&
            '!bg-blue-900 hover:!bg-opacity-90 '
          } `}
          type="submit"
          value="Send"
        />
      </form>
      <div
        className={`fixed transition-all duration-500 z-50 top-[80px] pointer-events-none scale-75 opacity-0 right-8 w-[200px] rounded bg-white p-4 ${
          showMessage &&
          'success-shadow !pointer-events-auto !scale-100 !opacity-100'
        } ${
          sm &&
          '!-top-[0] !eft-0 !right-0 !w-full bottom-0 grid place-content-center'
        }`}
      >
        <GrClose
          onClick={() => setShowMessage(false)}
          className="fixed cursor-pointer right-4 top-4"
        />
        Message was sent successfully 🎉
      </div>
    </>
  )
}

export default ContactForm
