const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";
const imgGroup = "http://localhost:3845/assets/dcdb43275d24564148928073a37e2152f30cb637.svg";
const imgGroup1 = "http://localhost:3845/assets/46a87ba3f27520cb5856df9a057242a403a495ae.svg";
const imgGroup2 = "http://localhost:3845/assets/30af4715703e26d5a014126126618f4cb4c2473e.svg";

export default function Trial() {
  return (
    <div className="bg-[#043873] content-stretch flex flex-col items-start justify-center pb-[32px] pt-[100px] px-[16px] relative size-full" data-name="Trial" data-node-id="2:2939">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Heading" data-node-id="2:2940">
        <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-white w-full" data-name="Text-block" data-node-id="2:2941">
          <p className="css-4hzbpn font-bold leading-[52px] relative shrink-0 text-[40px] w-full" data-node-id="2:2942">
            Try Whitepace today
          </p>
          <div className="font-normal leading-[30px] relative shrink-0 text-[18px] tracking-[-0.36px] w-full" data-node-id="2:2943">
            <p className="css-4hzbpn mb-0">{`Get started for free. `}</p>
            <p className="css-4hzbpn">Add your whole team as your needs grow.</p>
          </div>
        </div>
        <div className="bg-[#4f9cf9] content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[6px] shrink-0" data-name="Btn-try" data-node-id="2:2944">
          <p className="css-ew64yg font-medium leading-[20px] relative shrink-0 text-[16px] text-white" data-node-id="2:2945">
            Try Taskey free
          </p>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon" data-node-id="2:2946">
            <div className="relative shrink-0 size-[14px]" data-node-id="2:2947">
              <div className="absolute inset-[-3.57%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup214} />
              </div>
            </div>
          </div>
        </div>
        <p className="css-4hzbpn font-normal leading-[30px] min-w-full not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-[min-content]" data-node-id="2:2950">
          On a big team? Contact sales
        </p>
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="App-icon" data-node-id="2:2951">
          <div className="h-[36px] overflow-clip relative shrink-0 w-[35px]" data-name="apple-black-logo 2" data-node-id="2:2952">
            <div className="absolute contents inset-[0_9.21%]" data-name="Group" data-node-id="2:2953">
              <div className="absolute inset-[0_9.21%]" data-name="Group" data-node-id="2:2954">
                <img alt="" className="block max-w-none size-full" src={imgGroup} />
              </div>
            </div>
          </div>
          <div className="h-[36px] overflow-clip relative shrink-0 w-[35px]" data-name="windows-logo 1" data-node-id="2:2957">
            <div className="absolute contents inset-[1.2%_0]" data-name="Group" data-node-id="2:2958">
              <div className="absolute inset-[1.2%_0]" data-name="Group" data-node-id="2:2959">
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
          <div className="h-[36px] overflow-clip relative shrink-0 w-[35px]" data-name="android-logo 1" data-node-id="2:2964">
            <div className="absolute contents inset-[0_7.7%_0_7.69%]" data-name="Group" data-node-id="2:2965">
              <div className="absolute inset-[0_7.7%_0_7.69%]" data-name="Group" data-node-id="2:2966">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}