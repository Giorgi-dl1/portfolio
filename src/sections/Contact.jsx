import { TypeAnimation } from 'react-type-animation'
import ContactForm from '../components/ContactForm'

export const Contact = () => {
  return (
    <div
      id="contact"
      className="grid w-full py-8 place-content-center padding-x"
    >
      <h2 className="text-4xl font-bold text-center name ">
        Get In <span className="text-red-700">Touch</span>
      </h2>

      <TypeAnimation
        sequence={['Ask Me Anything', 2000, 'How Can I Help You?', 2000]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        className="pt-4 pb-8 font-bold text-center text-blue-900 name"
      />
      <div className="flex items-center max-w-[1200px]">
        <img src="/assets/contact.jpg" alt="" className="w-[50%]" />
        <ContactForm />
      </div>
    </div>
  )
}
