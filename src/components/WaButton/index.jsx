import { FaWhatsapp } from 'react-icons/fa';
import { StyledWaButton } from './styles'

function WaButton() {
    return(

        <StyledWaButton>

                <a className="social-link" href="https://api.whatsapp.com/send/?phone=5555997216999&text&type=phone_number&app_absent=0" target='_blank'>
                    <FaWhatsapp className='w_ico' />
                </a>

        </StyledWaButton>
    )
}

export default WaButton;