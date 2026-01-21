const imgElement = "http://localhost:3845/assets/e7fbdf0d6468e0cf666939f57a57f70ab5ecd154.svg";
const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";

export default function Extension() {
  return (
    <div className="bg-[#043873] flex flex-col gap-[60px] items-center justify-center px-[16px] py-[80px] relative size-full" data-name="Extension" data-node-id="2:2322">
      <div className="flex flex-col gap-[60px] items-center justify-center relative w-full" data-name="Heading" data-node-id="2:2323">
        <div className="flex flex-col gap-[24px] items-center justify-center relative w-full" data-name="Text-block" data-node-id="2:2324">
          <div className="absolute inset-[26.43%_16.32%_65.55%_20.14%]" data-name="Element" data-node-id="2:2325">
            <img alt="" className="block max-w-none size-full" src={imgElement} />
          </div>
          <p className="css-4hzbpn font-bold relative text-[36px] text-center text-white tracking-[-0.72px]" data-node-id="2:2354">
            Use as Extension
          </p>
          <p className="css-4hzbpn leading-[30px] relative text-[18px] text-center text-white tracking-[-0.36px]" data-node-id="2:2355">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="bg-[#4f9cf9] flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[8px]" data-name="Btn-get-started" data-node-id="2:2356">
          <p className="css-ew64yg leading-[30px] relative text-[18px] text-white tracking-[-0.36px]" data-node-id="2:2357">
            Let’s Go
          </p>
          <div className="flex items-start relative" data-name="Icon" data-node-id="2:2358">
            <div className="relative size-[14px]" data-node-id="2:2359">
              <div className="absolute inset-[-3.57%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup214} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[200px] items-start relative w-full" data-name="Illustration" data-node-id="2:2362">
        <div className="bg-[#c4defd] h-[198.653px] w-full" data-name="Image" data-node-id="2:2363" />
      </div>
    </div>
  );
}