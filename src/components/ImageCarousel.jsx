
export default function ImageGallery() {
  return (
    <div className="bg-white  h-fit px-4 py-40">
      <div className="text-[5rem] pb-10 font-bold text-center">
        <p>Unlock Your Growth Potential </p>
        <div className=" text-[2.8rem]  font-bold text-center">
          <p>Our experts guide you from seed funding to serious growth </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl h-[120vh]">
        {/* Image 1 */}
        <div className="absolute top-0 left-[5rem] w-[50%]">
          <ImageBlock
            src="https://img.freepik.com/free-photo/business-meeting-office_1268-21485.jpg?uid=R129847054&ga=GA1.1.324457947.1739178907&semt=ais_hybrid"
            title="Achieve growth with expert guidance from seasoned advisors."
            id="01"
          />
        </div>

        {/* Image 2 */}
        <div className="absolute bottom70 top-0 right-2 h-[5rem] w-[40%]">
          <ImageBlock
            src="https://img.freepik.com/free-photo/plant-growing-coins-glass-jar_155003-1174.jpg?uid=R129847054&ga=GA1.1.324457947.1739178907&semt=ais_hybrid"
            title="Secure necessary funding to propel your business forward."
            id="02"
          />
        </div>

        {/* Image 3 */}
        <div className="absolute top-[38%] left-52 w-[40%]">
          <ImageBlock
            src="https://img.freepik.com/free-photo/young-couple-feeling-uncertain-while-using-digital-tablet-meeting-with-their-insurance-agent-home_637285-3878.jpg?uid=R129847054&ga=GA1.1.324457947.1739178907&semt=ais_incoming"
            title="Strengthen your sales, marketing, and operations for efficiency."
            id="03"
          />
        </div>

        {/* Image 4 */}
        <div className="absolute top-[80%] -right-24 w-[48%]">
          <ImageBlock
            src="https://img.freepik.com/free-photo/business-partners-discussing-project-laptop_9975-22859.jpg"
            title="Personalized advice tailored to your unique  challenges."
            id="04"
          />
        </div>
      </div>
    </div>
  );
}

function ImageBlock({ src, title, id }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm font-medium opacity-75">{id}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
