import FormContact from "./Form";
import Map from "./Map-ssrfalse";

export default function Contact() {
  return (
    <section>
      <div>
        <h2 className="text-2xl lg:text-3xl font-VazirBold text-center mb-6 md:mb-8">
          تماس با ما
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <FormContact />
          </div>

          <div className="z-20">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
