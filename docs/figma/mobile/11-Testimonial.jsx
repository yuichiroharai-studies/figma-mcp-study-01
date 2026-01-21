const imgAvater = "http://localhost:3845/assets/446b0e1d4f2a828ccd1e8ec3278e7bb500e3bc98.png";
const imgElement = "http://localhost:3845/assets/1f3a1cb21c084477a2aa836ebd6c197efbcafd84.svg";
const imgGroup = "http://localhost:3845/assets/0cfe4e2a1efddff2b9cfcfba600a9bfd6a70bcbc.svg";
const imgSlider = "http://localhost:3845/assets/cf8c9d3acfc5a7cd180216f9b4fb91ef80cf8d32.svg";

export default function Testimonial() {
  return (
    <div className="flex flex-col gap-[60px] items-center justify-center px-[16px] py-[100px] relative size-full" data-name="Testimonial" data-node-id="2:2971">
      <div className="absolute inset-[19.85%_40.31%_77.25%_11.88%]" data-name="Element" data-node-id="2:2972">
        <img alt="" className="block max-w-none size-full" src={imgElement} />
      </div>
      <p className="css-4hzbpn font-bold leading-[52px] relative text-[40px] text-center" data-node-id="2:3001">
        What Our Clients Says
      </p>
      <div className="flex items-center justify-center relative w-full" data-name="Content" data-node-id="2:3002">
        <div className="bg-white flex flex-col gap-[40px] items-start p-[20px] relative rounded-[10px] shadow-[15px_10px_50px_0px_rgba(0,0,0,0.1)] w-[288px]" data-name="Client" data-node-id="2:3003">
          <div className="border-[#212529] border-b border-solid flex flex-col gap-[32px] items-start pb-[40px] pt-0 px-0 relative w-full" data-name="Comment" data-node-id="2:3004">
            <div className="flex flex-col items-start relative" data-name="Quote" data-node-id="2:3005">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative" data-name="Group" data-node-id="2:3006">
                <div className="col-1 h-[40.021px] ml-0 mt-0 relative row-1 w-[56px]" data-name="Group" data-node-id="2:3007">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </div>
            <p className="css-4hzbpn leading-[20px] relative text-[16px] tracking-[-0.32px]" data-node-id="2:3010">
              Taskkey is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] items-start justify-end relative w-full" data-name="Name-box" data-node-id="2:3011">
            <div className="relative size-[65px]" data-name="Avater" data-node-id="2:3012">
              <img alt="" className="block max-w-none size-full" height="65" src={imgAvater} width="65" />
            </div>
            <div className="flex flex-col gap-[15px] items-start relative text-[18px] tracking-[-0.36px] w-full" data-name="Name" data-node-id="2:3013">
              <p className="css-4hzbpn font-bold relative w-full" data-node-id="2:3014">
                Oberon Shaw, MCH
              </p>
              <p className="css-4hzbpn leading-[30px] relative w-full" data-node-id="2:3015">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[12px] relative w-[60px]" data-name="Slider" data-node-id="2:3016">
        <img alt="" className="block max-w-none size-full" src={imgSlider} />
      </div>
    </div>
  );
}