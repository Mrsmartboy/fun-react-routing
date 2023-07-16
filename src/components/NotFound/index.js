import {NotFoundContainer,NotFoundHead,NotFoundLogo} from './styled'

const NotFound= ()=>{

    return(
        <NotFoundContainer>
            <NotFoundLogo src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png" alt="not found"/>
            <NotFoundHead>Not Found</NotFoundHead>
        </NotFoundContainer>
    )
}

export default NotFound