const imgElement = "http://localhost:3845/assets/859c371fb1938fc4849eccbd33f8040b19b37c7c.svg";
const imgGroup214 = "http://localhost:3845/assets/e7b19cff4422768f834260cffe792fe79eabc2bf.svg";

export default function YourData() {
  return (
 <div className="flex flex-col gap-[100px] items-center justify-center px-[16px] py-[80px] size-full" data-name="YourData" data-node-id="2:2556">
      <div className="bg-[#c4defd] h-[163px]" data-name="Placeholder" data-node-id="2:3022" />
 <div className="flex flex-col gap-[60px] items-center" data-name="Heading" data-node-id="2:2615">
        <div className="flex flex-col gap-[24px] items-center relative" data-name="Text-block" data-node-id="2:2616">
          <div className="absolute inset-[11.52%_-4.86%_79.85%_37.5%]" data-name="Element" data-node-id="2:2617">
            <img alt="" className="block max-w-none size-full" src={imgElement} />
          </div>
 <p className="css-4hzbpn font-bold text-[36px] text-center tracking-[-0.72px]" data-node-id="2:2646">
            100% your data
          </p>
 <p className="css-4hzbpn leading-[30px] text-[18px] text-center tracking-[-0.36px]" data-node-id="2:2647">{`The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.`}</p>
        </div>
 <div className="bg-[#4f9cf9] flex gap-[10px] items-center justify-center px-[40px] py-[20px] rounded-[8px]" data-name="Btn-try" data-node-id="2:2648">
 <p className="css-ew64yg leading-[30px] text-[18px] text-white tracking-[-0.36px]" data-node-id="2:2649">
            Read more
          </p>
 <div className="flex items-start " data-name="Icon" data-node-id="2:2650">
            <div className="relative size-[14px]" data-node-id="2:2651">
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