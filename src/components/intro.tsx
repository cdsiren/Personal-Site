import formatAddress from "../lib/formats/formatAddress";
import { contractType } from "../lib/contractType";
import { useScreenSize } from "../lib/contexts/useScreenSizeContext";

const Intro = (props: any) => {
  const { width, height, type } = useScreenSize();
  const rn = new Date();
  const hours = rn.getHours();
  let maybeMorning: string;
  if (hours < 12) {
    maybeMorning = 'am'
  } else {
    maybeMorning = 'pm';
  }

  return (
    <section className={`3xl:leading-[170px] 3xl:text-[150px] 2xl:leading-[90px] 2xl:text-[90px] lg:text-[65px] lg:leading-[75px] sm:leading-[60px] sm:text-[50px] font-light tracking-wider p-8 3xl:p-16 min-h-screen flex flex-col justify-between`}>
      <h1>
        Charlie<br></br> Work
      </h1>
      <div className="flex items-center">
        <div>
          <p>{type},</p>
          <p>{width} x {height} px,</p>
          <p className="break-all"><a className={type === 'mobile' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://www.decentscan.xyz/?chainId=8453&txHash=0x330e61b42cc55c3ce8fcc65bc5ea95d1fe28e2b62d04516aec5a04e2e77be7ea`} target="_blank">{props.loading ? "..." : 8453+"."+formatAddress('0x330e61b42cc55c3ce8fcc65bc5ea95d1fe28e2b62d04516aec5a04e2e77be7ea')},</a></p>
          <p><a className={type === 'mobile' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://etherscan.io/block/${props.block}`} target="_blank">{props.block} {maybeMorning} {`{revalidate: 12}`},</a></p>
          <p>New York, NY</p>
        </div>
      </div>
      <div className="pb-16"></div>
    </section>
  )
}

export default Intro;