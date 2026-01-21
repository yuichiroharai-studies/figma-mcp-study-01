const imgVector = "http://localhost:3845/assets/e46072fccaf48139339da8429782a5a175ea1204.svg";
const imgVectorStroke = "http://localhost:3845/assets/01371a0d814d428c12cacb320fa7ad63c294ef2b.svg";

export default function Header() {
  return (
    <div className="bg-[#043873] content-stretch flex items-center justify-between p-[16px] relative size-full" data-name="Header" data-node-id="2:2869">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[134px]" data-name="Logo" data-node-id="2:2870">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Logo" data-node-id="2:2871">
          <div className="col-1 h-[21px] ml-0 mt-[2px] relative row-1 w-[26px]" data-name="Vector" data-node-id="13:13">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
          <p className="col-1 css-ew64yg font-bold leading-[normal] ml-[32.99px] mt-0 not-italic relative row-1 text-[19.644px] text-white" data-node-id="2:2878">
            whitepace
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Btn" data-node-id="2:2879">
        <div className="h-[26px] relative shrink-0 w-[42px]" data-name="Vector (Stroke)" data-node-id="13:15">
          <img alt="" className="block max-w-none size-full" src={imgVectorStroke} />
        </div>
      </div>
    </div>
  );
}