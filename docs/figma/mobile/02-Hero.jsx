const imgGroup212 = "http://localhost:3845/assets/f3ebb9b4b947918b9a9b49cfc5fb7ee9d7c501d4.svg";

export default function Hero() {
  return (
 <div className="bg-[#043873] flex flex-col items-center justify-center px-[16px] py-[80px] size-full" data-name="Hero" data-node-id="2:2020">
 <div className="flex flex-col gap-[100px] items-center justify-center" data-name="Heading / Image" data-node-id="2:2021">
 <div className="flex flex-col gap-[60px] items-center justify-center" data-name="Heading" data-node-id="2:2022">
 <div className="flex flex-col gap-[24px] items-center justify-center text-center text-white" data-name="Text-block" data-node-id="2:2023">
 <p className="css-4hzbpn font-bold text-[36px] tracking-[-0.02em]" data-node-id="2:2091">
              Get More Done with whitepace
            </p>
 <p className="css-4hzbpn leading-[30px] text-[18px] tracking-[-0.02em]" data-node-id="2:2092">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
 <div className="bg-[#4f9cf9] flex gap-[10px] items-center overflow-clip px-[40px] py-[20px] rounded-[8px]" data-name="Btn-free-trial" data-node-id="2:2093">
 <p className="css-ew64yg leading-[30px] text-[18px] text-white tracking-[-0.02em]" data-node-id="2:2094">{`Try TasKey Free `}</p>
            <div className="relative size-[10px]" data-node-id="2:2095">
              <div className="absolute inset-[-5%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup212} />
              </div>
            </div>
          </div>
        </div>
 <div className="flex flex-col items-start" data-name="Image-container" data-node-id="2:2098">
          <div className="bg-[#c4defd] h-[191px] w-full" data-name="Asset 1 2" data-node-id="2:2099" />
        </div>
      </div>
    </div>
  );
}