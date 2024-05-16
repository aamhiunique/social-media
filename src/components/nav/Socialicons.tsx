import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
const Socialicons = () => {
return (
    <>
        <div className="ml-auto flex items-center">
                <div className="flex">
                    <a href="https://facebook.com/aamhiunique" target='_blank' className="p-2 text-gray-400 hover:text-gray-500" rel='noreferrer'>
                        <span className="sr-only">Facebook</span>
                        <AiFillFacebook className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <div className="flex">
                    <a href="https://instagram.com/aamhiunique" target='_blank' className="p-2 text-gray-400 hover:text-gray-500" rel='noreferrer'>
                        <span className="sr-only">Instagram</span>
                        <AiFillInstagram className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <div className="flex">
                    <a href="https://youtube.com/@aamhiunique" target='_blank' className="p-2 text-gray-400 hover:text-gray-500" rel='noreferrer'>
                        <span className="sr-only">Linkedin</span>
                        <AiFillYoutube className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <div className="flex">
                    <a href="https://x.com/aamhiunique" target='_blank' className="p-2 text-gray-400 hover:text-gray-500" rel='noreferrer'>
                        <span className="sr-only">Twitter</span>
                        <AiFillTwitterCircle className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
        </div>
    </>
)
}

export default Socialicons