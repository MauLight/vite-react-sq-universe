import { TiltWrapper } from '../../hoc/SectionWrapper'
import video_lesson1 from '../../img/video_lesson_1.mp4'

function MythVideoLesson() {
    return (
        <div className='h-[600px]' >
            <div className='flex h-[100%]'>
                <video
                    src={video_lesson1}
                    type='video/mp4'
                    loop
                    controls={true}
                    muted
                    className="object-cover w-full h-auto"
                />
            </div>
        </div>
    )
}

export default TiltWrapper(MythVideoLesson, 'MythVideoLesson')
