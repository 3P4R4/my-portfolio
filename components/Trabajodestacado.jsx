import { SectionHeader } from "./Sectionheader";
import  Trabajos  from "./Trabajos";

export default function TrabajoDestacado(){
    return (
        <section className='px-6'>
            <div className='max-w-4xl mx-auto py-12'>
                <SectionHeader title="Trabajos destacados" href="#"/>
                <Trabajos/>
                <Trabajos/>
            </div>
        </section>
    );
}