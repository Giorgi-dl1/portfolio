import { useEffect, useState } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  const threshold = 20
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    let previousScrollYPosition = window.scrollY

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const showNav = isScrollingUp(currentScrollYPosition) ? false : true
        setShowNav(showNav)
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const linkNames = [
    { name: 'Home', color: '#6D2ED5' },
    { name: 'Skills', color: '#D14C32' },
    { name: 'Work', color: '#2D68F0' },
    { name: 'Contact', color: '#a10202' },
  ]

  return (
    <nav
      className={`flex z-50 items-center transition-all duration-300 ease-in right-0 fixed left-0 -top-[84px] ${
        showNav && 'shadow-md !top-0'
      } bg-white justify-between padding-x`}
    >
      <img src={logo} draggable={false} className="h-[70px]" alt="" />
      <ul className="flex gap-3 font-semibold">
        {linkNames.map((link) => (
          <a
            className={`text-black overflow-hidden group/link transition duration-300 hover:!text-[${link.color}]`}
            key={link.name}
            href={`#${link.name.toLocaleLowerCase()}`}
          >
            <li>{link.name}</li>
            <div
              className={`w-full -translate-x-[110%] transition duration-300 group-hover/link:translate-x-0 h-0.5 bg-[${link.color}]`}
            />
          </a>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
