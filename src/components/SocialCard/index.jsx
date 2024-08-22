import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {StyledSocialCard} from './styles'


function SocialCard() {
    return(
        <StyledSocialCard>

            <div className="social_card">

                <a className="social_link" href="https://www.instagram.com/tekiatecnologia/" target='_blank'>
                    <FaInstagram className='social_ico' />
                </a>

                <a className="social_link" href="https://www.facebook.com/tekiatecnologia" target='_blank'>
                    <FaFacebook className='social_ico' />
                </a>

                <a className="social_link" href="https://api.whatsapp.com/send/?phone=5555997216999&text&type=phone_number&app_absent=0" target='_blank'>
                    <FaWhatsapp className='social_ico' />
                </a>

            </div>

        </StyledSocialCard>
    )
}

export default SocialCard;