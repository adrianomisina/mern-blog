/* eslint-disable react/no-unescaped-entities */
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grip-cols-1">
          <div className="mt-5">
          <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Misina's</span>
              Blog   
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-3">
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://adrianomisina.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                Adriano's Portfolio
                </Footer.Link>

                <Footer.Link
                  href='https://github.com/adrianomisina'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                Adriano's Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='www.linkedin.com/in/adrianomisina'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                Linkedin
                </Footer.Link>

                <Footer.Link
                  href='https://github.com/adrianomisina'
                  target='_blank'
                  rel='noopener noreferrer'
                >
               Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>


            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Adriano Misina' year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-4 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsLinkedin} />
            </div>
          </div>
      </div>
    </Footer>
  )
}

export default FooterCom