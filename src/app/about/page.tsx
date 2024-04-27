import Greeting from "@/components/Greeting";
import SitReadingDoodle from './SitReadingDoodle.svg'

const AboutPage = () => {
  return (
    <div className='sm:flex'>
      <div className='flex-[2]'>
        <Greeting />
        <div className="mt-2">
          嗨，你好，我是思杰，是一名前端开发工程师。
        </div>
      </div>
      <div className="flex-1">
        <SitReadingDoodle />
      </div>
    </div>
  );
}

export default AboutPage
