import ReactPlayer from "react-player";

export default function Solar(){
    return (
        <>
            <div>
                <ReactPlayer url="https://video.wixstatic.com/video/11062b_82ad3d7f62ba4f30a1649cbee8475430/1080p/mp4/file.mp4"
                    playing={true}
                    loop={true}
                    height="100%"
                    width="100%"
                    muted={true}
                >

                </ReactPlayer>
            </div>
        </>
    )
}