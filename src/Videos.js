import './videos.css';

function Videos(props) {

    return (
            
            <div className="embed-responsive embed-responsive-16by9 size">
                <iframe className="embed-responsive-item size" src={props.links} allowfullscreen></iframe>
            </div>
            
    );
}

export default Videos;
