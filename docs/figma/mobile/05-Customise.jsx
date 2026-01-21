const imgElement = "http://localhost:3845/assets/92a28f5e707a4313b80a7effbc250dfd1c78f7d1.svg";
const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";

export default function Customise() {
  return (
    <div className="flex flex-col gap-[60px] items-center justify-center px-[16px] py-[100px] relative size-full" data-name="Customise" data-node-id="2:2897">
      <div className="flex flex-col items-start relative" data-name="Image container" data-node-id="2:2898">
        <div className="bg-[#c4defd] h-[214.623px] w-[288px]" data-name="Image" data-node-id="2:2899" />
      </div>
      <div className="flex flex-col gap-[60px] items-center relative w-full" data-name="Heading" data-node-id="2:2900">
        <div className="flex flex-col gap-[24px] items-center relative w-full" data-name="Text-block" data-node-id="2:2901">
          <div className="absolute inset-[31.95%_-3.13%_58.28%_48.61%]" data-name="Element" data-node-id="2:2902">
            <img alt="" className="block max-w-none size-full" src={imgElement} />
          </div>
          <p className="css-4hzbpn font-bold leading-[52px] relative text-[#212529] text-[40px] text-center" data-node-id="2:2931">
            Customise it to your needs
          </p>
          <p className="css-4hzbpn font-normal leading-[23px] relative text-[#212529] text-[18px] text-center" data-node-id="2:2932">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="bg-[#4f9cf9] flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[6px]" data-name="Btn-get-started" data-node-id="2:2933">
          <p className="css-ew64yg font-medium leading-[20px] relative text-[16px] text-white" data-node-id="2:2934">
            Let’s Go
          </p>
          <div className="flex items-start relative" data-name="Icon" data-node-id="2:2935">
            <div className="relative size-[14px]" data-node-id="2:2936">
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