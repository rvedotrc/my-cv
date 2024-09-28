import Image from "next/image";

const Headshot = () => (
  <div className="headshot">
    <Image
      src="/headshot-square.png"
      alt="Rachel, smiling"
      width={200}
      height={200}
    />
  </div>
);

export default Headshot;