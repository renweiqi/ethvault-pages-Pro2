import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const Announcement: React.FC = () => {

  return (
    <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
          通知：尊敬的掘金者，ZSD上链主网，欢迎体验！&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </Marquee>
      }
    />
  );
};

export default Announcement;