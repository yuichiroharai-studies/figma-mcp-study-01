const imgElement = "http://localhost:3845/assets/92a28f5e707a4313b80a7effbc250dfd1c78f7d1.svg";
const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";

export default function Customise() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[16px] py-[100px] relative size-full" data-name="Customise" data-node-id="2:2897">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image container" data-node-id="2:2898">
        <div className="bg-[#c4defd] h-[214.623px] shrink-0 w-[288px]" data-name="Image" data-node-id="2:2899" />
      </div>
      <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-full" data-name="Heading" data-node-id="2:2900">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Text-block" data-node-id="2:2901">
          <div className="absolute inset-[31.95%_-3.13%_58.28%_48.61%]" data-name="Element" data-node-id="2:2902">
            <img alt="" className="block max-w-none size-full" src={imgElement} />
          </div>
          <p className="css-4hzbpn font-bold leading-[52px] min-w-full not-italic relative shrink-0 text-[#212529] text-[40px] text-center w-[min-content]" data-node-id="2:2931">
            Customise it to your needs
          </p>
          <p className="css-4hzbpn font-normal leading-[23px] min-w-full relative shrink-0 text-[#212529] text-[18px] text-center w-[min-content]" data-node-id="2:2932">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="bg-[#4f9cf9] content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[6px] shrink-0" data-name="Btn-get-started" data-node-id="2:2933">
          <p className="css-ew64yg font-medium leading-[20px] relative shrink-0 text-[16px] text-white" data-node-id="2:2934">
            Let’s Go
          </p>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon" data-node-id="2:2935">
            <div className="relative shrink-0 size-[14px]" data-node-id="2:2936">
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