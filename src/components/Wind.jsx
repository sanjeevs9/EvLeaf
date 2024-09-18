import ReactPlayer from "react-player";


export default function Wind(){
    return (
        <>
            <div>
                <ReactPlayer url="https://video.wixstatic.com/video/11062b_4daa8bdb13034c7d89bf5a394a27b9eb/1080p/mp4/file.mp4"
                width="100%" height="100%" playing={true} loop={true}
                muted={true}
                >
                </ReactPlayer>
            </div>
        </>
    )
}