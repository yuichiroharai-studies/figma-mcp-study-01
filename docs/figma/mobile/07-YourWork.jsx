const imgElement = "http://localhost:3845/assets/72a7f6f924e9931558ea43254134fb4dea367397.svg";
const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";

export default function YourWork() {
  return (
    <div className="bg-[#043873] flex flex-col items-start pb-[140px] pt-[100px] px-[16px] relative size-full" data-name="YourWork" data-node-id="2:2516">
      <div className="flex flex-col gap-[60px] items-start relative w-full" data-name="Heading" data-node-id="2:2517">
        <div className="flex flex-col gap-[24px] items-start relative w-full" data-name="Text-block" data-node-id="2:2518">
          <div className="absolute inset-[28.78%_4.86%_63.39%_0]" data-name="Element" data-node-id="2:2519">
            <img alt="" className="block max-w-none size-full" src={imgElement} />
          </div>
          <p className="css-4hzbpn font-bold leading-[normal] relative text-[36px] text-white tracking-[-0.72px]" data-node-id="2:2548">
            Your work, everywhere you are
          </p>
          <p className="css-4hzbpn font-normal leading-[30px] relative text-[18px] text-white tracking-[-0.36px]" data-node-id="2:2549">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>
        <div className="bg-[#4f9cf9] flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[8px]" data-name="Btn-try" data-node-id="2:2550">
          <p className="css-ew64yg font-normal leading-[30px] relative text-[18px] text-white tracking-[-0.36px]" data-node-id="2:2551">
            Try Taskey
          </p>
          <div className="flex items-start relative" data-name="Icon" data-node-id="2:2552">
            <div className="relative size-[14px]" data-node-id="2:2553">
              <div className="absolute inset-[-3.57%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup214} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}