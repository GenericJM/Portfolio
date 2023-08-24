export default function PageButton({ action, image }) {
    return (<a href="#projects">

        <button
            
            className="nPage project__button-colors other-text pageButton"
            onClick={action}
        >
            <img src={image} className="movePage"></img>
        </button>

    </a>)

}