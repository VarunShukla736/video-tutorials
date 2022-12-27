import './videos.css';

function Videos(props) {

    return (
            
            <div className="ratio ratio-16x9">
                <iframe title="YouTube video" allowfullscreen src={props.links} ></iframe>
            </div>
            
    );
}

export default Videos;
